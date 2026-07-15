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

app = FastAPI(
    title="Rainfall Prediction API",
    version="1.0.0"
)

app.include_router(prediction_router)


@app.get("/")
def home():
    return {
        "message": "Rainfall Prediction API is running"
    }