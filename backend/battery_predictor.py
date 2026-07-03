from datetime import datetime


def predict_battery_life(data):

    daily_distance = float(data.get("dailyDistance") or 0)

    current_year = datetime.now().year

    # Simple estimation

    if daily_distance <= 30:

        life_years = 10

        charge_cycles = 3000

        health = 88

    elif daily_distance <= 80:

        life_years = 8

        charge_cycles = 2500

        health = 82

    else:

        life_years = 6

        charge_cycles = 2000

        health = 75

    replacement_year = current_year + life_years

    return {

        "batteryLife": life_years,

        "chargeCycles": charge_cycles,

        "batteryHealth": health,

        "replacementYear": replacement_year

    }