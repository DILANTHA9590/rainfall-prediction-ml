function PredictionResult({ result }) {
  if (!result) return null;

  const isRain = result.prediction === 1;

  return (
    <div
      className={`mt-8 rounded-2xl shadow-lg p-6 border-l-8 ${
        isRain
          ? "bg-green-50 border-green-500"
          : "bg-yellow-50 border-yellow-500"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Prediction Result
      </h2>

      <div className="space-y-3">
        <p className="text-lg">
          <span className="font-semibold">Prediction:</span>{" "}
          {isRain ? (
            <span className="text-green-700 font-bold">
              🌧 Rain Expected
            </span>
          ) : (
            <span className="text-yellow-700 font-bold">
              ☀ No Rain Expected
            </span>
          )}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Prediction Value:</span>{" "}
          {result.prediction}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Message:</span>{" "}
          {result.message}
        </p>
      </div>
    </div>
  );
}

export default PredictionResult;