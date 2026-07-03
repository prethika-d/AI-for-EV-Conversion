import { useState } from "react";

function VehicleForm({ onAnalyze }) {
  const [formData, setFormData] = useState({
    model: "",
    vehicleType: "",
    weight: "",
    engineCC: "",
    age: "",
    dailyDistance: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = () => {

 if (

  !formData.model ||

  !formData.vehicleType ||

  !formData.weight ||

  !formData.engineCC ||

  !formData.age ||

  !formData.dailyDistance ||

  !formData.budget

 ) {

   alert("Please fill all fields");

   return;

 }

 onAnalyze(formData);

};
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center mb-8">
        Vehicle Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="model"
          placeholder="Vehicle Model"
          className="border p-3 rounded-lg"
          value={formData.model}
          onChange={handleChange}
        />

        <select
          name="vehicleType"
          className="border p-3 rounded-lg"
          value={formData.vehicleType}
          onChange={handleChange}
        >
          <option value="">Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Scooter">Scooter</option>
          <option value="Van">Van</option>
        </select>

        <input
          type="number"
          name="weight"
          placeholder="Vehicle Weight (kg)"
          className="border p-3 rounded-lg"
          value={formData.weight}
          onChange={handleChange}
        />

        <input
          type="number"
          name="engineCC"
          placeholder="Engine Capacity (CC)"
          className="border p-3 rounded-lg"
          value={formData.engineCC}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Vehicle Age (Years)"
          className="border p-3 rounded-lg"
          value={formData.age}
          onChange={handleChange}
        />

        <input
          type="number"
          name="dailyDistance"
          placeholder="Daily Distance (km)"
          className="border p-3 rounded-lg"
          value={formData.dailyDistance}
          onChange={handleChange}
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget (₹)"
          className="border p-3 rounded-lg"
          value={formData.budget}
          onChange={handleChange}
        />

      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition"
      >
        Analyze Vehicle
      </button>

    </div>
  );
}

export default VehicleForm;