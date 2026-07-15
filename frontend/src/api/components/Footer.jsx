function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 pt-6 text-center">
      <p className="text-sm text-gray-600">
        Developed using{" "}
        <span className="font-semibold text-blue-600">React</span>,{" "}
        <span className="font-semibold text-green-600">FastAPI</span> and{" "}
        <span className="font-semibold text-purple-600">
          Random Forest
        </span>
      </p>

      <p className="mt-2 text-xs text-gray-500">
        © 2026 Rainfall Prediction System. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;