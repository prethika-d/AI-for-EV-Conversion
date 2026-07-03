function CostCard({ recommendation }) {

  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">

        Smart Cost Optimizer

      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Optimized Cost</h3>

          <p>₹{recommendation.optimizedCost}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Additional Savings Needed</h3>

          <p>₹{recommendation.savingsNeeded}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Payback Period</h3>

          <p>{recommendation.paybackYears} Years</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Suggestion</h3>

          <p>{recommendation.costSuggestion}</p>

        </div>

      </div>

    </div>

  );
}

export default CostCard;