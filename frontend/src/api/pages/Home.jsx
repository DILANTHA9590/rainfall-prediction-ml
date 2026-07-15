import { useState } from "react";

import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background_image.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="min-h-screen w-full bg-black/35 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">

          <Header />

          <PredictionForm setResult={setResult} />

          <PredictionResult result={result} />

          <Footer />

        </div>
      </div>
    </div>
  );
}

export default Home;