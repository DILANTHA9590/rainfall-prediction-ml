import { CloudRain } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-col items-center mb-8">
      <CloudRain size={60} className="text-blue-600 mb-3" />

      <h1 className="text-4xl font-bold text-gray-800">
        Rainfall Prediction System
      </h1>

      <p className="text-gray-500 mt-2">
        Predict rainfall using a trained Random Forest model
      </p>
    </header>
  );
}

export default Header;