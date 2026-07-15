function PredictionResult({ result }) {

  if (!result) return null;

  return (

    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Prediction Result
      </h2>

      <p className="text-xl">

        {result.prediction === 1
          ? "🌧 Rain Expected"
          : "☀ No Rain Expected"}

      </p>

    </div>

  );

}

export default PredictionResult;