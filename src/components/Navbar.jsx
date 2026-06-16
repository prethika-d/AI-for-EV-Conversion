function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          EVision AI
        </h1>

        <button className="bg-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-600 transition">
          Start Analysis
        </button>

      </div>
    </nav>
  );
}

export default Navbar;