import { CloudRain } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-col items-center mb-8 text-center">
      <CloudRain
        size={64}
        className="text-sky-300 drop-shadow-lg mb-4"
      />

      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        Rainfall Prediction System
      </h1>

      <p className="mt-3 text-lg text-gray-100 drop-shadow-md">
        Predict rainfall using a trained Random Forest Machine Learning model
      </p>
    </header>
  );
}

export default Header;