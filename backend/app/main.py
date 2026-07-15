# from fastapi import FastAPI

# app = FastAPI(
#     title="Rainfall Prediction API",
#     version="1.0.0"
# )


# @app.get("/")
# def home():
#     return {
#         "message": "Rainfall Prediction API is running"
#     }



from fastapi import FastAPI

from app.routers.prediction import router as prediction_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Rainfall Prediction API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prediction_router)


@app.get("/")
def home():
    return {
        "message": "Rainfall Prediction API is running"
    }