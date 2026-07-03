def analyze_risk(data):

    weight = float(data.get("weight") or 0)

    budget = float(data.get("budget") or 0)

    engine_cc = float(data.get("engineCC") or 0)

    # Battery overload risk

    if weight > 1800:

        battery_risk = "HIGH"

    elif weight > 1200:

        battery_risk = "MEDIUM"

    else:

        battery_risk = "LOW"

    # Weight imbalance risk

    if weight > 1500:

        weight_risk = "MEDIUM"

    else:

        weight_risk = "LOW"

    # Budget risk

    if budget < 300000:

        budget_risk = "HIGH"

    elif budget < 500000:

        budget_risk = "MEDIUM"

    else:

        budget_risk = "LOW"

    # Performance risk

    if engine_cc > 1800:

        performance_risk = "MEDIUM"

    else:

        performance_risk = "LOW"

    # Overall risk

    high_count = [

        battery_risk,

        weight_risk,

        budget_risk,

        performance_risk

    ].count("HIGH")

    if high_count >= 2:

        overall_risk = "HIGH"

    elif high_count == 1:

        overall_risk = "MEDIUM"

    else:

        overall_risk = "LOW"

    return {

        "batteryRisk": battery_risk,

        "weightRisk": weight_risk,

        "budgetRisk": budget_risk,

        "performanceRisk": performance_risk,

        "overallRisk": overall_risk

    }