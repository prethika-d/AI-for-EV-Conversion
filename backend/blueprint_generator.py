def generate_blueprint(data):

    vehicle_type = data.get("vehicleType", "")

    if vehicle_type == "Car":

        conversion_days = 14

    elif vehicle_type == "Van":

        conversion_days = 18

    else:

        conversion_days = 10

    return {

        "removeComponents": [

            "Engine",

            "Fuel Tank",

            "Exhaust System",

            "Radiator"

        ],

        "installComponents": [

            "Battery Pack",

            "Electric Motor",

            "Smart Controller",

            "Charging Port",

            "Cooling System"

        ],

        "conversionDays": conversion_days

    }