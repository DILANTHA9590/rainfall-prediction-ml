from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    day: int = Field(..., ge=1, le=365)

    pressure: float = Field(..., ge=900, le=1100)

    maxtemp: float = Field(..., ge=-20, le=60)

    temparature: float = Field(..., ge=-20, le=60)

    mintemp: float = Field(..., ge=-20, le=60)

    dewpoint: float = Field(..., ge=-30, le=40)

    humidity: float = Field(..., ge=0, le=100)

    cloud: float = Field(..., ge=0, le=100)

    sunshine: float = Field(..., ge=0, le=24)

    winddirection: float = Field(..., ge=0, le=360)

    windspeed: float = Field(..., ge=0, le=200)


class PredictionResponse(BaseModel):
    prediction: int
    message: str