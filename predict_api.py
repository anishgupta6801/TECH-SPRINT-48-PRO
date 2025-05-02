from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import random
import math
import hashlib
import time

app = Flask(__name__)
# Enable CORS for all routes with more comprehensive configuration
CORS(app, resources={r"/*": {
    "origins": [
        "http://localhost:5173", 
        "http://127.0.0.1:5173",
        "http://localhost:5174", 
        "http://127.0.0.1:5174",
        "http://localhost:5175", 
        "http://127.0.0.1:5175"
    ], 
    "methods": ["GET", "POST", "OPTIONS"], 
    "allow_headers": ["Content-Type", "Cache-Control", "Pragma", "Expires"]
}})

# Dictionary to store machine-specific coefficients
machine_coefficients = {}

def get_machine_coefficients(machine_name):
    """Generate deterministic but unique coefficients for each machine name"""
    if machine_name in machine_coefficients:
        return machine_coefficients[machine_name]
    
    # Use the machine name to seed a deterministic random pattern
    hash_obj = hashlib.md5(machine_name.lower().encode())
    hash_hex = hash_obj.hexdigest()
    
    # Convert first 4 bytes of hash to integer for seeding
    seed = int(hash_hex[:8], 16)
    random.seed(seed)
    
    # Generate coefficients specific to this machine
    coefficients = {
        'base': random.uniform(400, 600),  # Base days
        'age_factor': random.uniform(10, 20),  # How much age impacts
        'usage_factor': random.uniform(0.005, 0.015),  # How much usage impacts
        'maintenance_factor': random.uniform(0.3, 0.7),  # Maintenance impact
        'failure_factor': random.uniform(15, 25),  # Previous failures impact
        'output_factor': random.uniform(1.5, 2.5),  # Output quality impact
        'quality_factor': random.uniform(0.8, 1.2),  # Quality issues impact
        'cost_factor': random.uniform(0.03, 0.07),  # Cost factor impact
    }
    
    # Store for future use
    machine_coefficients[machine_name] = coefficients
    
    # Reset random seed
    random.seed(time.time())
    
    return coefficients

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 200
    
    data = request.json
    
    # Extract machine name
    machine_name = data.get('machine_name', 'Unknown Machine')
    
    # Extract features from the request
    age_years = data.get('age_years', 0)
    usage_hours = data.get('usage_hours', 0)
    last_maintenance_days = data.get('last_maintenance_days', 0)
    failures_last_year = data.get('failures_last_year', 0)
    avg_output = data.get('avg_output', 0)
    quality_issues = data.get('quality_issues', 0)
    cost_per_hour = data.get('cost_per_hour', 0)
    
    # Get machine-specific coefficients
    coef = get_machine_coefficients(machine_name)
    
    # More varied formula for prediction with machine-specific coefficients
    predicted_days = (
        coef['base']
        - coef['age_factor'] * age_years 
        - coef['usage_factor'] * usage_hours 
        - coef['maintenance_factor'] * last_maintenance_days 
        - coef['failure_factor'] * failures_last_year 
        + coef['output_factor'] * avg_output 
        - coef['quality_factor'] * quality_issues 
        - coef['cost_factor'] * cost_per_hour
    )
    
    # Add time-based randomness (each prediction will be slightly different)
    random.seed(time.time())
    predicted_days += random.uniform(-30, 30)
    
    # Apply some logic based on machine name (certain words imply different machinery types)
    machine_lower = machine_name.lower()
    if 'pump' in machine_lower:
        predicted_days *= random.uniform(0.8, 1.0)  # Pumps tend to fail a bit earlier
    elif 'turbine' in machine_lower:
        predicted_days *= random.uniform(1.0, 1.2)  # Turbines tend to last longer
    elif 'motor' in machine_lower:
        predicted_days *= random.uniform(0.9, 1.1)  # Motors are average
    elif 'press' in machine_lower:
        predicted_days *= random.uniform(0.7, 0.9)  # Presses fail more frequently
    elif 'drill' in machine_lower:
        predicted_days *= random.uniform(0.6, 0.8)  # Drills have shorter lifespans
    
    # Ensure prediction is positive and reasonable
    predicted_days = max(1, min(predicted_days, 365))
    
    # Round to integer for better presentation
    predicted_days = round(predicted_days)
    
    print(f"Prediction request received for machine: {machine_name}")
    print(f"Input features: {data}")
    print(f"Machine-specific coefficients: {coef}")
    print(f"Predicted time to failure: {predicted_days} days")
    
    response = jsonify({
        'predicted_time_to_failure_days': predicted_days,
        'machine_name': machine_name
    })
    
    return response

if __name__ == '__main__':
    print("Starting mock prediction API server...")
    print("This version uses a sophisticated formula with machine-specific factors")
    print("API available at http://localhost:5000/predict")
    app.run(host='0.0.0.0', port=5000, debug=True) 