def optimize_components(data):

    weight = float(data.get("weight") or 0)

    vehicle_type = data.get("vehicleType")

    recommendations = {}

    # Battery Type

    if weight <= 1200:

        recommendations["batteryType"] = "LFP Battery"

    elif weight <= 1800:

        recommendations["batteryType"] = "NMC Battery"

    else:

        recommendations["batteryType"] = "Solid-State Battery"

    # Motor Type

    if vehicle_type == "Car":

        recommendations["motor"] = "BLDC 45 kW"

    elif vehicle_type == "Van":

        recommendations["motor"] = "PMSM 70 kW"

    elif vehicle_type == "Bike":

        recommendations["motor"] = "Hub Motor 5 kW"

    else:

        recommendations["motor"] = "BLDC 10 kW"

    # Controller

    recommendations["controller"] = "72V Smart Controller"

    # Charging Port

    recommendations["chargingPort"] = "CCS2"

    # Cooling System

    if weight > 1800:

        recommendations["coolingSystem"] = "Liquid Cooling"

    else:

        recommendations["coolingSystem"] = "Passive Cooling"

    return recommendations