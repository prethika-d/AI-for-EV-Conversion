function AnalysisSummary({ recommendation }) {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        🚗 EV Analysis Summary
      </h2>

      <div className="grid md:grid-cols-5 gap-6 text-center">

        <div>
          <p className="text-sm opacity-80">Overall Score</p>
          <h3 className="text-3xl font-bold">
            {recommendation.overallScore}%
          </h3>
        </div>

        <div>
          <p className="text-sm opacity-80">Battery</p>
          <h3 className="text-3xl font-bold">
            {recommendation.battery} kWh
          </h3>
        </div>

        <div>
          <p className="text-sm opacity-80">Range</p>
          <h3 className="text-3xl font-bold">
            {recommendation.range} km
          </h3>
        </div>

        <div>
          <p className="text-sm opacity-80">Cost</p>
          <h3 className="text-3xl font-bold">
            ₹{recommendation.cost}
          </h3>
        </div>

        <div>
          <p className="text-sm opacity-80">Decision</p>
          <h3 className="text-xl font-bold">
            {recommendation.decision}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default AnalysisSummary;