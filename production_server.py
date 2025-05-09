from waitress import serve
from predict_api import app

if __name__ == '__main__':
    print("Starting production server...")
    print("Model, scaler and feature list loaded successfully")
    print("Using ML model for predictions")
    print("API available at http://localhost:5000/predict")
    # Serve the app using Waitress
    serve(app, host='0.0.0.0', port=5000, threads=4) 