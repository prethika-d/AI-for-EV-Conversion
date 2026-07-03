function RiskCard({ recommendation }) {

  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">

        EV Conversion Risk Analyzer

      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Battery Overload Risk</h3>

          <p>{recommendation.batteryRisk}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Weight Imbalance Risk</h3>

          <p>{recommendation.weightRisk}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Budget Risk</h3>

          <p>{recommendation.budgetRisk}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Performance Risk</h3>

          <p>{recommendation.performanceRisk}</p>

        </div>

      </div>

      <div className="mt-6 text-center">

        <span className="bg-red-500 text-white px-6 py-2 rounded-full">

          Overall Risk: {recommendation.overallRisk}

        </span>

      </div>

    </div>

  );
}

export default RiskCard;