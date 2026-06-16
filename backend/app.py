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
    weight = float(data.get("weight") or 0)
    engine_cc = float(data.get("engineCC") or 0)
    budget = float(data.get("budget") or 0)

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
        "feasibility": feasibility
    })

if __name__ == "__main__":
    app.run(debug=True)