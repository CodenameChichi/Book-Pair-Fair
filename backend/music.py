import os
import uuid
from transformers import pipeline
import scipy.io.wavfile

_synthesizer = None


def get_synthesizer():
    global _synthesizer
    if _synthesizer is None:
        # 처음 호출될 때만 모델 로드 (최초 1회는 다운로드 때문에 오래 걸림)
        _synthesizer = pipeline("text-to-audio", model="facebook/musicgen-small")
    return _synthesizer


def build_prompt(genre: str, mood: str) -> str:
    return (
        f"A {genre} style instrumental track with a {mood} atmosphere, "
        f"moderate tempo around 80 bpm, ambient and looping, "
        f"background music for focused reading"
    )


def generate_music(prompt: str) -> str:
    synthesizer = get_synthesizer()

    # MusicGen은 50 토큰 ≈ 1초 오디오. 30초 트랙 = 약 1500 토큰
    music = synthesizer(prompt, forward_params={"max_new_tokens": 1500, "do_sample": True})

    os.makedirs("static/audio", exist_ok=True)
    filename = f"{uuid.uuid4()}.wav"
    filepath = f"static/audio/{filename}"

    audio_data = music["audio"]
    if audio_data.ndim > 1:
        audio_data = audio_data[0]

    scipy.io.wavfile.write(filepath, rate=music["sampling_rate"], data=audio_data)
    return filepath