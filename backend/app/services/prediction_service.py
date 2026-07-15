import pandas as pd

from fastapi import HTTPException

from app.utils.model_loader import model


def predict_rainfall(data):
    try:
        input_data = pd.DataFrame([{
            "day": data.day,
            "pressure": data.pressure,
            "maxtemp": data.maxtemp,
            "temparature": data.temparature,
            "mintemp": data.mintemp,
            "dewpoint": data.dewpoint,
            "humidity": data.humidity,
            "cloud": data.cloud,
            "sunshine": data.sunshine,
            "winddirection": data.winddirection,
            "windspeed": data.windspeed,
        }])

        prediction = model.predict(input_data)[0]

        message = (
            "Rain Expected"
            if prediction == 1
            else "No Rain Expected"
        )

        return {
            "prediction": int(prediction),
            "message": message,
        }

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Prediction failed"
        )