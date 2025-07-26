# backend/app.py

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/message")
def get_message():
    return {"message": "You’re doing your best 🌱"}

class NameRequest(BaseModel):
    name: str

@app.post("/api/greet")
def greet_user(data: NameRequest):
    return {"message": f"Hi {data.name}, you're doing your best 🌿"}
