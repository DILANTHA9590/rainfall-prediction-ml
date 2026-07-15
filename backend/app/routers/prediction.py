from fastapi import APIRouter

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.prediction_service import predict_rainfall

router = APIRouter(
    prefix="/api/v1",
    tags=["Rainfall Prediction"]
)


@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(data: PredictionRequest):
    return predict_rainfall(data)