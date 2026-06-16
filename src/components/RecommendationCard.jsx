function RecommendationCard({ recommendation }) {

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        AI Recommendation
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-slate-100 rounded-xl">
          <h3>Battery Capacity</h3>
          <p>{recommendation.battery} kWh</p>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl">
          <h3>Motor Power</h3>
          <p>{recommendation.motor} kW</p>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl">
          <h3>Estimated Range</h3>
          <p>{recommendation.range} km</p>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl">
          <h3>Conversion Cost</h3>
          <p>₹{recommendation.cost}</p>
        </div>

      </div>

      <div className="mt-6 text-center">
        <span className="bg-green-500 text-white px-6 py-2 rounded-full">
          Feasibility: {recommendation.feasibility}
        </span>
      </div>

      <div className="p-4 bg-slate-100 rounded-xl">
  <h3>Fuel Savings</h3>
  <p>₹45,000 / year</p>
</div>

<div className="p-4 bg-slate-100 rounded-xl">
  <h3>CO₂ Reduction</h3>
  <p>1.8 Tons / year</p>
</div>

<div className="mt-8 p-5 bg-emerald-100 rounded-xl">

  <h3 className="text-xl font-bold text-emerald-800">
    AI Recommendation
  </h3>

  <p className="mt-2">
    {recommendation.feasibility === "HIGH"
      ? "✅ Vehicle is highly suitable for EV conversion."
      : "⚠️ Vehicle conversion is possible but budget optimization is recommended."}
  </p>

</div>
    </div>
  );
}



export default RecommendationCard;


