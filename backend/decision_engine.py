def final_decision(score_data, risk_data):

    overall = score_data["overallScore"]

    risk = risk_data["overallRisk"]

    if overall >= 85 and risk == "LOW":

        decision = "Highly Recommended"

    elif overall >= 60:

        decision = "Recommended with Modifications"

    else:

        decision = "Not Recommended"

    return {

        "decision": decision

    }