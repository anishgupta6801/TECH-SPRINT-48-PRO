from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)
model = joblib.load('rf_time_to_failure_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = [
        data['age_years'],
        data['usage_hours'],
        data['last_maintenance_days'],
        data['failures_last_year'],
        data['avg_output'],
        data['quality_issues'],
        data['cost_per_hour']
    ]
    df = pd.DataFrame([features], columns=[
        'age_years', 'usage_hours', 'last_maintenance_days', 'failures_last_year',
        'avg_output', 'quality_issues', 'cost_per_hour'
    ])
    prediction = model.predict(df)[0]
    return jsonify({'predicted_time_to_failure_days': prediction})

if __name__ == '__main__':
    app.run(port=5000)