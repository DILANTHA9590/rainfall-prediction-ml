import { useState } from "react";

import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";

function Home() {

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="w-full max-w-5xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          🌧 Rainfall Prediction System
        </h1>

        <PredictionForm setResult={setResult} />

        <PredictionResult result={result} />

      </div>

    </div>
  );
}

export default Home;