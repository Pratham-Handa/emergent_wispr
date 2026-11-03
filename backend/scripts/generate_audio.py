import asyncio
import os

from dotenv import load_dotenv

load_dotenv()

LINE = "पुठिल, 11 बज के एक की train कब आएगी, प्रथम सेंट्रल को जाने वाली?"
OUT = "/app/frontend/public/audio/aunty.mp3"


async def main():
    from emergentintegrations.llm.openai import OpenAITextToSpeech

    tts = OpenAITextToSpeech(api_key=os.environ["EMERGENT_LLM_KEY"])
    audio = await tts.generate_speech(text=LINE, model="tts-1", voice="coral", speed=0.95)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "wb") as f:
        f.write(audio)
    print("saved", OUT, len(audio), "bytes")


if __name__ == "__main__":
    asyncio.run(main())
