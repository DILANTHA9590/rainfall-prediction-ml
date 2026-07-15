import pandas as pd

from app.utils.model_loader import model


def predict_rainfall(data):
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

    message = "Rain Expected" if prediction == 1 else "No Rain"

    return {
        "prediction": int(prediction),
        "message": message,
    }