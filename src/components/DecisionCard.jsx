function DecisionCard({ recommendation }) {

  let icon = "";
  let message = "";

  if (recommendation.decision === "Highly Recommended") {

    icon = "🟢";

    message =
      "This vehicle is an excellent candidate for EV conversion.";

  }

  else if (
    recommendation.decision ===
    "Recommended with Modifications"
  ) {

    icon = "🟡";

    message =
      "Vehicle conversion is possible but some improvements are needed.";

  }

  else {

    icon = "🔴";

    message =
      "This vehicle is currently not suitable for EV conversion.";

  }

  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">

        Final EV Conversion Decision

      </h2>

      <div className="text-center">

        <h1 className="text-4xl font-bold">

          {icon} {recommendation.decision}

        </h1>

        <p className="mt-6 text-lg">

          {message}

        </p>

      </div>

    </div>

  );
}

export default DecisionCard;