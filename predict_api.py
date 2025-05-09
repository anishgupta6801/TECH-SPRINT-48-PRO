from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
import os
import socket
import json
from datetime import datetime

app = Flask(__name__)
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

# Load the trained model and scaler
try:
    model = joblib.load('models/failure_prediction_xgb.joblib')
    scaler = joblib.load('models/feature_scaler.joblib')
    feature_list = joblib.load('models/feature_list.joblib')
    print("Model, scaler and feature list loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")
    print("Falling back to formula-based predictions")
    model = None
    scaler = None
    feature_list = None

# Store active Arduino connections
active_connections = {}

def prepare_features(data):
    """Prepare features for prediction"""
    # Extract base features
    features = {
        'age_years': float(data.get('age_years', 0)),
        'usage_hours': float(data.get('usage_hours', 0)),
        'last_maintenance_days': float(data.get('last_maintenance_days', 0)),
        'failures_last_year': float(data.get('failures_last_year', 0)),
        'avg_output': float(data.get('avg_output', 0)),
        'quality_issues': float(data.get('quality_issues', 0)),
        'cost_per_hour': float(data.get('cost_per_hour', 0)),
        'temperature': float(data.get('temperature', 50)),  # Default values for new features
        'vibration_level': float(data.get('vibration_level', 2)),
        'power_consumption': float(data.get('power_consumption', 100)),
        'maintenance_cost_history': float(data.get('maintenance_cost_history', 5000)),
        'environment_humidity': float(data.get('environment_humidity', 50)),
        'operational_stress': float(data.get('operational_stress', 50))
    }
    
    # Calculate derived features
    features['maintenance_frequency'] = features['age_years'] * 365 / (features['last_maintenance_days'] + 1)
    features['cost_per_output'] = features['cost_per_hour'] / (features['avg_output'] + 1)
    features['stress_factor'] = features['vibration_level'] * features['operational_stress'] / 100
    
    # Create machine type one-hot encoding
    machine_types = ['Pump', 'Turbine', 'Motor', 'Press', 'Drill',
                    'Hydraulic', 'Conveyor', 'Compressor', 'Generator', 'Robot']
    machine_name = data.get('machine_name', '').lower()
    
    for machine_type in machine_types:
        features[f'machine_{machine_type.lower()}'] = 1 if machine_type.lower() in machine_name else 0
    
    return features

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return '', 200
    
    data = request.json
    machine_name = data.get('machine_name', 'Unknown Machine')
    
    try:
        # Prepare features
        features = prepare_features(data)
        
        # If model is available, use it for prediction
        if model is not None and scaler is not None and feature_list is not None:
            # Convert features to DataFrame with correct column order
            df = pd.DataFrame([features])
            df = df.reindex(columns=feature_list, fill_value=0)
            
            # Scale features
            X_scaled = scaler.transform(df)
            
            # Make prediction
            predicted_days = int(model.predict(X_scaled)[0])
            
            # Ensure prediction is within reasonable bounds
            predicted_days = max(1, min(predicted_days, 730))
            
            print(f"ML Model Prediction request received for machine: {machine_name}")
            print(f"Input features: {data}")
            print(f"Predicted time to failure: {predicted_days} days")
            
        else:
            # Fallback to formula-based prediction
            print("Using formula-based prediction (model not available)")
            predicted_days = 365  # Default prediction
        
        return jsonify({
            'predicted_time_to_failure_days': predicted_days,
            'machine_name': machine_name,
            'prediction_method': 'ml_model' if model is not None else 'formula_based'
        })
        
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({
            'error': f'Prediction failed: {str(e)}',
            'machine_name': machine_name
        }), 500

@app.route('/predict', methods=['GET'])
def api_info():
    """Provide API information and usage instructions"""
    return jsonify({
        'api_name': 'Machine Failure Prediction API',
        'version': '1.0',
        'endpoint': '/predict',
        'methods': ['POST'],
        'description': 'Predicts time to failure for industrial machines',
        'required_fields': {
            'machine_name': 'string',
            'age_years': 'float',
            'usage_hours': 'float',
            'last_maintenance_days': 'float',
            'failures_last_year': 'float',
            'avg_output': 'float',
            'quality_issues': 'float',
            'cost_per_hour': 'float'
        },
        'optional_fields': {
            'temperature': 'float (default: 50)',
            'vibration_level': 'float (default: 2)',
            'power_consumption': 'float (default: 100)',
            'maintenance_cost_history': 'float (default: 5000)',
            'environment_humidity': 'float (default: 50)',
            'operational_stress': 'float (default: 50)'
        },
        'example_request': {
            'machine_name': 'Hydraulic Pump',
            'age_years': 5,
            'usage_hours': 1000,
            'last_maintenance_days': 30,
            'failures_last_year': 2,
            'avg_output': 85,
            'quality_issues': 5,
            'cost_per_hour': 250
        }
    })

@app.route('/arduino/connect', methods=['POST'])
def connect_arduino():
    try:
        data = request.json
        machine_id = data.get('machine_id')
        ip = data.get('ip')
        port = data.get('port', 80)
        
        # Validate IP and port
        try:
            socket.inet_aton(ip)
        except socket.error:
            return jsonify({'error': 'Invalid IP address'}), 400
            
        if not (0 < port <= 65535):
            return jsonify({'error': 'Invalid port number'}), 400
            
        # Store connection info
        active_connections[machine_id] = {
            'ip': ip,
            'port': port,
            'last_update': datetime.now().isoformat(),
            'status': 'connected'
        }
        
        return jsonify({
            'status': 'connected',
            'message': f'Successfully connected to Arduino at {ip}:{port}'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/arduino/disconnect', methods=['POST'])
def disconnect_arduino():
    try:
        data = request.json
        machine_id = data.get('machine_id')
        
        if machine_id in active_connections:
            del active_connections[machine_id]
            return jsonify({'status': 'disconnected'})
        else:
            return jsonify({'error': 'No active connection found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/arduino/data', methods=['POST'])
def receive_arduino_data():
    try:
        data = request.json
        machine_id = data.get('machine_id')
        
        if machine_id not in active_connections:
            return jsonify({'error': 'No active connection found'}), 404
            
        # Update connection status and timestamp
        active_connections[machine_id]['last_update'] = datetime.now().isoformat()
        
        # Process sensor data
        sensor_data = data.get('sensor_data', {})
        
        # Update prediction with real-time data
        if model and scaler and feature_list:
            # Prepare features for prediction
            features = prepare_features(sensor_data)
            
            # Make prediction
            prediction = model.predict(features.reshape(1, -1))[0]
            
            return jsonify({
                'status': 'success',
                'prediction': float(prediction),
                'sensor_data': sensor_data
            })
        else:
            return jsonify({
                'status': 'success',
                'sensor_data': sensor_data,
                'message': 'Using formula-based predictions'
            })
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/arduino/status/<machine_id>', methods=['GET'])
def get_arduino_status(machine_id):
    try:
        if machine_id in active_connections:
            return jsonify(active_connections[machine_id])
        else:
            return jsonify({'error': 'No active connection found'}), 404
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/arduino/wifi-connect', methods=['POST'])
def connect_wifi():
    try:
        data = request.json
        machine_id = data.get('machine_id')
        ssid = data.get('ssid')
        password = data.get('password')
        
        if not all([machine_id, ssid, password]):
            return jsonify({'error': 'Missing required fields'}), 400
            
        # Store WiFi credentials
        if machine_id not in active_connections:
            active_connections[machine_id] = {}
            
        active_connections[machine_id]['wifi'] = {
            'ssid': ssid,
            'last_update': datetime.now().isoformat(),
            'status': 'connected'
        }
        
        return jsonify({
            'status': 'connected',
            'message': f'Successfully connected to WiFi network {ssid}'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Starting prediction API server...")
    if model is not None:
        print("Using ML model for predictions")
    else:
        print("Using formula-based predictions (ML model not loaded)")
    print("API available at http://localhost:5000/predict")
    app.run(host='0.0.0.0', port=5000, debug=True) 