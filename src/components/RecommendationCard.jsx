function RecommendationCard({ recommendation }) {

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        AI Recommendation
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-slate-100 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 mb-6">

  <div className="p-4 bg-blue-100 rounded-xl">

    <h3 className="font-semibold">
      Overall Conversion Score
    </h3>

    <p className="text-3xl font-bold">
      {recommendation.overallScore}%
    </p>

  </div>

  <div className="p-4 bg-green-100 rounded-xl">

    <h3 className="font-semibold">
      Mechanical Compatibility
    </h3>

    <p className="text-3xl font-bold">
      {recommendation.mechanicalCompatibility}%
    </p>

  </div>

  <div className="p-4 bg-yellow-100 rounded-xl">

    <h3 className="font-semibold">
      Economic Feasibility
    </h3>

    <p className="text-3xl font-bold">
      {recommendation.economicFeasibility}%
    </p>

  </div>

  <div className="p-4 bg-purple-100 rounded-xl">

    <h3 className="font-semibold">
      Environmental Benefit
    </h3>

    <p className="text-3xl font-bold">
      {recommendation.environmentalBenefit}%
    </p>

  </div>
  <div className="mt-8">

  <h2 className="text-2xl font-bold text-center mb-6">

    Intelligent Component Optimizer

  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <div className="p-4 bg-slate-100 rounded-xl">

      <h3>Battery Technology</h3>

      <p>{recommendation.batteryType}</p>

    </div>

    <div className="p-4 bg-slate-100 rounded-xl">

      <h3>Recommended Motor</h3>

      <p>{recommendation.recommendedMotor}</p>

    </div>

    <div className="p-4 bg-slate-100 rounded-xl">

      <h3>Controller</h3>

      <p>{recommendation.controller}</p>

    </div>

    <div className="p-4 bg-slate-100 rounded-xl">

      <h3>Charging Port</h3>

      <p>{recommendation.chargingPort}</p>

    </div>

    <div className="p-4 bg-slate-100 rounded-xl md:col-span-2">

      <h3>Cooling System</h3>

      <p>{recommendation.coolingSystem}</p>

    </div>

  </div>

  </div>
  </div>
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


