function BlueprintCard({ recommendation }) {

  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">

        Digital EV Conversion Blueprint

      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <h3 className="font-bold text-xl mb-4">

            Components to Remove

          </h3>

          {recommendation.removeComponents.map(
            (item, index) => (

              <p key={index}>✓ {item}</p>

            )
          )}

        </div>

        <div>

          <h3 className="font-bold text-xl mb-4">

            Components to Install

          </h3>

          {recommendation.installComponents.map(
            (item, index) => (

              <p key={index}>✓ {item}</p>

            )
          )}

        </div>

      </div>

      <div className="mt-8 text-center">

        <h3 className="font-bold">

          Estimated Conversion Time

        </h3>

        <p>

          {recommendation.conversionDays} Days

        </p>

      </div>

    </div>

  );
}

export default BlueprintCard;