function BatteryCard({ recommendation }) {

  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">

        Battery Life Predictor

      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Expected Battery Life</h3>

          <p>{recommendation.batteryLife} Years</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Charge Cycles</h3>

          <p>{recommendation.chargeCycles}</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Battery Health</h3>

          <p>{recommendation.batteryHealth}%</p>

        </div>

        <div className="p-4 bg-slate-100 rounded-xl">

          <h3>Replacement Year</h3>

          <p>{recommendation.replacementYear}</p>

        </div>

      </div>

    </div>

  );
}

export default BatteryCard;