import { useState } from "react";

import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="w-full max-w-5xl">
        <Header/>

   

        <PredictionForm setResult={setResult} />

        <PredictionResult result={result} />
         <Footer />

      </div>

    </div>
  );
}

export default Home;