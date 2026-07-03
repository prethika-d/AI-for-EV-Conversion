def calculate_conversion_score(data):

    weight = float(data.get("weight") or 0)

    age = float(data.get("age") or 0)

    daily_distance = float(data.get("dailyDistance") or 0)

    budget = float(data.get("budget") or 0)

    score = 0

    # Mechanical Compatibility

    if weight <= 1500:
        mechanical = 90

    elif weight <= 2500:
        mechanical = 75

    else:
        mechanical = 60

    # Economic Feasibility

    if budget >= 500000:
        economic = 90

    elif budget >= 300000:
        economic = 75

    else:
        economic = 60

    # Environmental Benefit

    if daily_distance >= 40:
        environmental = 95

    elif daily_distance >= 20:
        environmental = 80

    else:
        environmental = 65

    # Vehicle Age Influence

    if age <= 5:
        age_bonus = 10

    elif age <= 10:
        age_bonus = 5

    else:
        age_bonus = 0

    score = round(

        (mechanical +
         economic +
         environmental) / 3

    ) + age_bonus

    score = min(score, 100)

    return {

        "overallScore": score,

        "mechanicalCompatibility": mechanical,

        "economicFeasibility": economic,

        "environmentalBenefit": environmental

    }