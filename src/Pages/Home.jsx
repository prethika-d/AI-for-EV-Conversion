import AnalysisSummary from "../components/AnalysisSummary";
import DecisionCard from "../components/DecisionCard";
import CostCard from "../components/CostCard";
import BatteryCard from "../components/BatteryCard";
import RiskCard from "../components/RiskCard";
import BlueprintCard from "../components/BlueprintCard";

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

    }

    catch (error) {

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

          {/* Vehicle Evaluation */}

          <h2 className="text-4xl font-bold text-center mt-14 mb-8">

            Vehicle Evaluation

          </h2>

          <RecommendationCard
            recommendation={recommendation}
          />

          <EVChart
            recommendation={recommendation}
          />

          {/* Conversion Planning */}

          <h2 className="text-4xl font-bold text-center mt-16 mb-8">

            Conversion Planning

          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

            <BlueprintCard
              recommendation={recommendation}
            />

            <RiskCard
              recommendation={recommendation}
            />

            <BatteryCard
              recommendation={recommendation}
            />

            <CostCard
              recommendation={recommendation}
            />
            <AnalysisSummary
              recommendation={recommendation}
            />

          </div>

          {/* Final Decision */}

          <div className="mt-16">

            <DecisionCard
              recommendation={recommendation}
            />

          </div>

        </>

      )}

      <Footer />

    </div>

  );

}

export default Home;