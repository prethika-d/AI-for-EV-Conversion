def optimize_cost(data):

    budget = float(data.get("budget") or 0)

    weight = float(data.get("weight") or 0)

    estimated_cost = weight * 240

    # Suggested saving

    if budget < estimated_cost:

        savings_needed = estimated_cost - budget

        suggestion = "Increase budget or choose a smaller battery pack"

    else:

        savings_needed = 0

        suggestion = "Current budget is sufficient"

    # Estimated payback period

    annual_savings = 45000

    payback_years = round(estimated_cost / annual_savings, 1)

    return {

        "optimizedCost": round(estimated_cost),

        "savingsNeeded": round(savings_needed),

        "paybackYears": payback_years,

        "costSuggestion": suggestion

    }