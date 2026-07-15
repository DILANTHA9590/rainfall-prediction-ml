import { useState } from "react";
import { predictRainfall } from "../predictionApi";


const fields = [
  { name: "day", label: "Day", placeholder: "Enter day (1-365)" },
  { name: "pressure", label: "Pressure (hPa)", placeholder: "e.g. 1017.4" },
  { name: "maxtemp", label: "Maximum Temperature (°C)", placeholder: "e.g. 21.2" },
  { name: "temparature", label: "Temperature (°C)", placeholder: "e.g. 20.6" },
  { name: "mintemp", label: "Minimum Temperature (°C)", placeholder: "e.g. 19.9" },
  { name: "dewpoint", label: "Dew Point (°C)", placeholder: "e.g. 19.4" },
  { name: "humidity", label: "Humidity (%)", placeholder: "e.g. 87" },
  { name: "cloud", label: "Cloud Cover (%)", placeholder: "e.g. 88" },
  { name: "sunshine", label: "Sunshine (Hours)", placeholder: "e.g. 1.1" },
  { name: "winddirection", label: "Wind Direction (°)", placeholder: "e.g. 60" },
  { name: "windspeed", label: "Wind Speed (km/h)", placeholder: "e.g. 17.2" },
];

function PredictionForm({setResult}) {
  const [formData, setFormData] = useState({
    day: "",
    pressure: "",
    maxtemp: "",
    temparature: "",
    mintemp: "",
    dewpoint: "",
    humidity: "",
    cloud: "",
    sunshine: "",
    winddirection: "",
    windspeed: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const result = await predictRainfall(formData);

    console.log(result);

    setResult(result);

  } catch (error) {

    console.error(error);

    alert("Prediction Failed");

  }
};


  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Rainfall Prediction
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {field.label}
              </label>

              <input
                type="number"
                step="any"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Predict Rainfall
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default PredictionForm;