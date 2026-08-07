from fastapi import FastAPI
from database import engine, Base
import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/book/search")
def search_books(title: str = ""):
    dummy_results = [
        {
            "title": "해리 포터와 마법사의 돌",
            "author": "J.K. 롤링",
            "description": "한 소년 마법사의 이야기",
        },
        {
            "title": "1984",
            "author": "조지 오웰",
            "description": "감시 사회를 그린 디스토피아 소설",
        },
    ]
    return dummy_results