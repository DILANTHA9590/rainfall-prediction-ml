function Footer() {
  return (
    <footer className="mt-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 py-6 text-center shadow-xl">
      <p className="text-sm text-gray-100">
        Developed using{" "}
        <span className="font-semibold text-sky-300">React</span>,{" "}
        <span className="font-semibold text-green-300">FastAPI</span> and{" "}
        <span className="font-semibold text-purple-300">
          Random Forest
        </span>
      </p>

      <p className="mt-3 text-xs text-gray-300">
        © 2026 Rainfall Prediction System. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;