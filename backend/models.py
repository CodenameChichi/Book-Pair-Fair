from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    author = Column(String, nullable=True)
    google_volume_id = Column(String, unique=True, index=True)
    genre = Column(String, nullable=True)
    mood = Column(String, nullable=True)

class Track(Base):
    __tablename__ = "tracks"

    id = Column(Integer, primary_key=True, index=True)
    book_id = Column(Integer, ForeignKey("books.id"))
    generation_prompt = Column(String)
    audio_url = Column(String)
    duration_seconds = Column(Integer, default=30)
    mood_params = Column(String)