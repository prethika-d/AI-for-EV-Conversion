import axios from "axios";
import { useState } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VehicleForm from "../components/VehicleForm";
import RecommendationCard from "../components/RecommendationCard";
import Footer from "../components/Footer";
import EVChart from "../components/EVChart";

function Home() {
  const [recommendation, setRecommendation] = useState(null);

  const generateRecommendation = async (vehicleData) => {
    try {
      console.log("Sending Data:", vehicleData);

      const response = await axios.post(
        "http://127.0.0.1:5000/analyze",
        vehicleData
      );

      console.log("Backend Response:", response.data);

      setRecommendation(response.data);

    } catch (error) {
      console.error("Backend Error:", error);
      alert("Failed to connect to Flask Backend");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <Navbar />

      <HeroSection />

      <VehicleForm
        onAnalyze={generateRecommendation}
      />

      {recommendation && (
        <>
          <RecommendationCard
            recommendation={recommendation}
          />

          <EVChart
            recommendation={recommendation}
          />
        </>
      )}

      <Footer />

    </div>
  );
}

export default Home;