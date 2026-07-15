// import { useState } from "react";
// import { Loader2 } from "lucide-react";
// import { predictRainfall } from "../predictionApi";

// const fields = [
//   { name: "day", label: "Day", placeholder: "Enter day (1-365)" },
//   { name: "pressure", label: "Pressure (hPa)", placeholder: "e.g. 1017.4" },
//   { name: "maxtemp", label: "Maximum Temperature (°C)", placeholder: "e.g. 21.2" },
//   { name: "temparature", label: "Temperature (°C)", placeholder: "e.g. 20.6" },
//   { name: "mintemp", label: "Minimum Temperature (°C)", placeholder: "e.g. 19.9" },
//   { name: "dewpoint", label: "Dew Point (°C)", placeholder: "e.g. 19.4" },
//   { name: "humidity", label: "Humidity (%)", placeholder: "e.g. 87" },
//   { name: "cloud", label: "Cloud Cover (%)", placeholder: "e.g. 88" },
//   { name: "sunshine", label: "Sunshine (Hours)", placeholder: "e.g. 1.1" },
//   { name: "winddirection", label: "Wind Direction (°)", placeholder: "e.g. 60" },
//   { name: "windspeed", label: "Wind Speed (km/h)", placeholder: "e.g. 17.2" },
// ];

// function PredictionForm({ setResult }) {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     day: "",
//     pressure: "",
//     maxtemp: "",
//     temparature: "",
//     mintemp: "",
//     dewpoint: "",
//     humidity: "",
//     cloud: "",
//     sunshine: "",
//     winddirection: "",
//     windspeed: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: Number(e.target.value),
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const result = await predictRainfall(formData);

//       setResult(result);
//     } catch (error) {
//       console.error(error);
//       alert("Prediction Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">

//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
//           Rainfall Prediction
//         </h2>

//         <p className="text-center text-gray-500 mb-8">
//           Enter weather information to predict rainfall.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {fields.map((field) => (
//             <div key={field.name}>
//               <label className="block mb-2 font-medium text-gray-700">
//                 {field.label}
//               </label>

//               <input
//                 type="number"
//                 step="any"
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 placeholder={field.placeholder}
//                 required
//                 className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>
//           ))}

//           <div className="md:col-span-2 mt-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold shadow-lg transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="animate-spin" size={20} />
//                   Predicting...
//                 </>
//               ) : (
//                 "🌧 Predict Rainfall"
//               )}
//             </button>
//           </div>
//         </form>

//       </div>
//     </div>
//   );
// }

// export default PredictionForm;
import { useState } from "react";
import { Loader2 } from "lucide-react";
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

const defaultValues = {
  day: 172,
  pressure: 1013.2,
  maxtemp: 31.5,
  temparature: 28.7,
  mintemp: 25.1,
  dewpoint: 23.4,
  humidity: 86,
  cloud: 72,
  sunshine: 4.5,
  winddirection: 180,
  windspeed: 15.8,
};

function PredictionForm({ setResult }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await predictRainfall(formData);

      setResult(result);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(defaultValues);
    setResult(null);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 p-8">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Rainfall Prediction
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Enter weather information to predict rainfall.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block mb-2 font-medium text-gray-700">
                {field.label}
              </label>

              <input
                type="number"
                step="any"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          ))}

          <div className="md:col-span-2 flex gap-4 mt-2">
            <button
              type="button"
              onClick={handleReset}
              className="w-1/3 rounded-xl border border-gray-300 bg-white py-3 font-semibold hover:bg-gray-100 transition"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-2/3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold shadow-lg transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Predicting...
                </>
              ) : (
                "🌧 Predict Rainfall"
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default PredictionForm;