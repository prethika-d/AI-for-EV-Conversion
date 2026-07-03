def environmental_analysis(data):

    daily_distance = float(
        data.get("dailyDistance") or 0
    )

    budget = float(
        data.get("budget") or 0
    )

    annual_distance = daily_distance * 365
    fuel_saved = max(
    1,
    round(annual_distance / 18) 
    )
    annual_savings = max(
    1,
    round(fuel_saved * 100)
    )

    co2_reduction = round(
        annual_distance * 0.12,
        1
    )

    electricity_use = round(
        annual_distance * 0.15
    )

    if annual_savings == 0:
        payback_period = 0
    else:
        payback_period = round(
            budget / annual_savings,
            1
        )

    if co2_reduction >= 1500:

        grade = "A"

    elif co2_reduction >= 800:

        grade = "B"

    else:

        grade = "C"

    return {

        "annualSavings":
        annual_savings,

        "co2Reduction":
        co2_reduction,

        "electricityConsumption":
        electricity_use,

        "paybackPeriod":
        payback_period,

        "environmentalGrade":
        grade

    }