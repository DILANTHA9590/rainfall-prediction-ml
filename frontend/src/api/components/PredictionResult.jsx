import {
  CloudRain,
  Sun,
  CheckCircle,
  XCircle,
} from "lucide-react";

function PredictionResult({ result }) {
  if (!result) return null;

  const isRain = result.prediction === 1;

  return (
    <div
      className={`mt-8 rounded-3xl shadow-2xl p-8 border ${
        isRain
          ? "bg-green-50 border-green-200"
          : "bg-yellow-50 border-yellow-200"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        {isRain ? (
          <CloudRain
            className="text-green-600"
            size={42}
          />
        ) : (
          <Sun
            className="text-yellow-500"
            size={42}
          />
        )}

        <h2 className="text-3xl font-bold text-gray-800">
          Prediction Result
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
          <span className="font-semibold text-gray-600">
            Prediction
          </span>

          {isRain ? (
            <span className="flex items-center gap-2 text-green-700 font-bold">
              <CheckCircle size={22} />
              Rain Expected
            </span>
          ) : (
            <span className="flex items-center gap-2 text-yellow-700 font-bold">
              <XCircle size={22} />
              No Rain Expected
            </span>
          )}
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
          <span className="font-semibold text-gray-600">
            Prediction Value
          </span>

          <span className="text-lg font-bold text-blue-600">
            {result.prediction}
          </span>
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
          <span className="font-semibold text-gray-600">
            API Message
          </span>

          <span className="font-medium text-gray-800">
            {result.message}
          </span>
        </div>

      </div>
    </div>
  );
}

export default PredictionResult;