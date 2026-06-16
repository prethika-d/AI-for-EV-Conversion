function HeroSection() {
  return (
    <section className="text-center py-20 px-6">

      <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
        AI Powered EV Conversion Advisor
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Convert conventional vehicles into electric vehicles
        using intelligent AI recommendations for battery,
        motor and conversion feasibility.
      </p>

      <button className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-600 transition">
        Analyze Vehicle
      </button>

    </section>
  );
}

export default HeroSection;