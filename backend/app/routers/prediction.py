from fastapi import APIRouter, status

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
    response_model=PredictionResponse,
    status_code=status.HTTP_200_OK,
    summary="Predict Rainfall",
    description="""
Predict whether rainfall is expected based on weather conditions.

Input Features:
- Day
- Pressure
- Maximum Temperature
- Temperature
- Minimum Temperature
- Dew Point
- Humidity
- Cloud
- Sunshine
- Wind Direction
- Wind Speed

Returns:
- prediction = 1 (Rain Expected)
- prediction = 0 (No Rain Expected)
    """,
    response_description="Rainfall prediction result"
)
def predict(data: PredictionRequest):
    return predict_rainfall(data)