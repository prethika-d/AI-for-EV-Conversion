from decision_engine import final_decision
from cost_optimizer import optimize_cost
from battery_predictor import predict_battery_life
from risk_analyzer import analyze_risk
from blueprint_generator import generate_blueprint
from environmental_analyzer import environmental_analysis
from component_optimizer import optimize_components
from engineering_rules import calculate_conversion_score
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "EVision AI Backend Running"

@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    score_data = calculate_conversion_score(data)
    weight = float(data.get("weight") or 0)
    engine_cc = float(data.get("engineCC") or 0)
    budget = float(data.get("budget") or 0)
    component_data = optimize_components(data)
    environment_data = environmental_analysis(data)
    blueprint_data = generate_blueprint(data)
    battery_data = predict_battery_life(data)
    risk_data = analyze_risk(data)
    cost_data = optimize_cost(data)
    decision_data = final_decision(score_data,risk_data)
    battery = round(weight / 50)
    motor = round(engine_cc / 25)
    range_km = battery * 8
    cost = battery * 12000

    feasibility = (
        "HIGH"
        if budget >= cost
        else "MEDIUM"
    )

    return jsonify({
    "battery": battery,

    "motor": motor,

    "range": range_km,

    "cost": cost,

    "feasibility": feasibility,

    "overallScore": score_data["overallScore"],

    "mechanicalCompatibility":
    score_data["mechanicalCompatibility"],

    "economicFeasibility":
    score_data["economicFeasibility"],

    "environmentalBenefit":
    score_data["environmentalBenefit"],

    "batteryType": component_data["batteryType"],

    "recommendedMotor":
    component_data["motor"],

    "controller":
    component_data["controller"],

    "chargingPort":
    component_data["chargingPort"],

    "coolingSystem":
    component_data["coolingSystem"],
    "annualSavings":
    environment_data["annualSavings"],

    "co2Reduction":
    environment_data["co2Reduction"],

    "electricityConsumption":
    environment_data["electricityConsumption"],

    "paybackPeriod":
    environment_data["paybackPeriod"],

    "environmentalGrade":
    environment_data["environmentalGrade"],

    "removeComponents":
    blueprint_data["removeComponents"],

    "installComponents":
    blueprint_data["installComponents"],

    "conversionDays":
    blueprint_data["conversionDays"],

    "batteryRisk":
    risk_data["batteryRisk"],

    "weightRisk":
    risk_data["weightRisk"],

    "budgetRisk":
    risk_data["budgetRisk"],

    "performanceRisk":
    risk_data["performanceRisk"],

    "overallRisk":
    risk_data["overallRisk"],

    "batteryLife":
    battery_data["batteryLife"],

    "chargeCycles":
    battery_data["chargeCycles"],

    "batteryHealth":
    battery_data["batteryHealth"],

    "replacementYear":
    battery_data["replacementYear"],

    "optimizedCost":
    cost_data["optimizedCost"],

    "savingsNeeded":
    cost_data["savingsNeeded"],

    "paybackYears":
    cost_data["paybackYears"],

    "costSuggestion":
    cost_data["costSuggestion"],

    "decision":
    decision_data["decision"],


})

if __name__ == "__main__":
    app.run(debug=True)