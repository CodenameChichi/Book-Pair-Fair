import os
import requests
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, Base, SessionLocal
import models
from ai import classify_book
import uuid
from fastapi.staticfiles import StaticFiles
from music import build_prompt, generate_music
import shutil

Base.metadata.create_all(bind=engine)

app = FastAPI()

GOOGLE_BOOKS_API_KEY = os.getenv("GOOGLE_BOOKS_API_KEY")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/api/book/search")
def search_books(title: str = "", db: Session = Depends(get_db)):
    url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": title, "key": GOOGLE_BOOKS_API_KEY}
    response = requests.get(url, params=params)
    data = response.json()

    results = []
    for item in data.get("items", []):
        info = item.get("volumeInfo", {})
        volume_id = item.get("id")
        book_title = info.get("title")
        author = ", ".join(info.get("authors", [])) if info.get("authors") else None
        description = info.get("description")

        if not (book_title and author and description):
            continue

        existing = db.query(models.Book).filter_by(google_volume_id=volume_id).first()

        if existing:
            genre, mood = existing.genre, existing.mood
        else:
            classification = classify_book(description)
            genre, mood = classification["genre"], classification["mood"]
            new_book = models.Book(
                title=book_title,
                author=author,
                google_volume_id=volume_id,
                genre=genre,
                mood=mood,
            )
            db.add(new_book)
            db.commit()

        results.append({
            "title": book_title,
            "author": author,
            "description": description,
            "genre": genre,
            "mood": mood,
        })

    return results

os.makedirs("static/audio", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.post("/api/music/generate")
def generate_track(book_id: int, db: Session = Depends(get_db)):
    book = db.query(models.Book).filter_by(id=book_id).first()
    if not book:
        return {"error": "책을 찾을 수 없어요"}

    prompt = build_prompt(book.genre, book.mood)
    filepath = generate_music(prompt)  # static/audio/xxx.wav 형태로 이미 저장됨

    filename = os.path.basename(filepath)
    audio_url = f"http://127.0.0.1:8000/static/audio/{filename}"

    track = models.Track(
        book_id=book.id,
        generation_prompt=prompt,
        audio_url=audio_url,
        duration_seconds=30,
        mood_params=book.mood,
    )
    db.add(track)
    db.commit()

    return {"audio_url": audio_url, "duration_seconds": 30}