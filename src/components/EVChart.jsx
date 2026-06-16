import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function EVChart({ recommendation }) {

  const data = [
    {
      name: "Battery",
      value: recommendation.battery,
    },
    {
      name: "Motor",
      value: recommendation.motor,
    },
    {
      name: "Range",
      value: recommendation.range,
    },
    {
      name: "Feasibility",
      value:
        recommendation.feasibility === "HIGH"
          ? 90
          : 60,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl">

      <h2 className="text-3xl font-bold text-center mb-8">
        EV Analysis Graph
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default EVChart;