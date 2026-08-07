import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

GENRE_LIST = [
    "romance",
    "sci-fi",
    "mystery/thriller",
    "fantasy",
    "historical",
    "horror",
    "young adult",
    "poetry/essay",
    "self-help/autobiography",
    "food/drink",
    "art/culture",
    "history/humanities",
    "business",
    "religion/philosophy/psychology",
    "sociology/political",
    "science/technology/health",
]

def classify_book(description: str) -> dict:
    prompt = f"""
Read the following book description and respond only in the below JSON format. No additional explanation.

{{
  "genre": "among {'/'.join(GENRE_LIST)}, choose the only most appropriate genre (English, lowercase)",
  "mood": "The mood of the book in 3 words (English, comma-separated)"
}}

Book description: {description}
"""
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"},
    )
    return json.loads(response.choices[0].message.content)