# PredictPro AI - Equipment Failure Prediction System

PredictPro AI is a powerful application that combines a React frontend with a Python Flask API to predict equipment failure time. The system uses a sophisticated algorithm that considers various factors like equipment age, usage patterns, maintenance history, and more to generate accurate predictions.

## Features

- **AI-Powered Predictions**: Sophisticated prediction model that adapts to different machine types
- **User-Friendly Interface**: Clean, professional blue and white interface design
- **Responsive Design**: Works on desktop and mobile devices
- **Data Visualization**: Clear visualization of prediction results and risk levels
- **Maintenance Recommendations**: Automated recommendations based on prediction results

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- NPM (comes with Node.js)

### Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd equipment-failure-prediction
   ```

2. **Install frontend dependencies**:
   ```
   npm install
   ```

3. **Install Python dependencies**:
   ```
   pip install flask==2.0.1 flask-cors==3.0.10
   ```

## Running the Application

### Option 1: Using the combined startup script (Recommended)

Simply run the startup script that starts both the API server and React frontend:

```
start_app.bat
```

The application will be available at http://localhost:5174

### Option 2: Running components separately

1. **Start the Python API server**:
   ```
   start_api_server.bat
   ```
   The API will be available at http://localhost:5000

2. **Start the React frontend**:
   ```
   npm run dev
   ```
   The frontend will be available at http://localhost:5174

## Usage Guide

1. Navigate to the Prediction page
2. Fill in the equipment details:
   - Machine Name (e.g., "Hydraulic Press", "Cooling Turbine")
   - Age (in years)
   - Usage Hours
   - Last Maintenance (days ago)
   - Failures Last Year
   - Average Output percentage
   - Quality Issues count
   - Cost per Hour ($)
3. Click "Predict Time to Failure"
4. View the prediction results, which include:
   - Estimated days until failure
   - Risk level assessment
   - Visual risk indicator
   - Maintenance recommendations (for high-risk equipment)

## Technical Architecture

### Frontend (React + TypeScript)

- Modern React with functional components and hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Three.js for 3D elements
- Responsive design principles

### Backend (Python + Flask)

- Flask API with CORS support
- Advanced prediction algorithm with machine-specific coefficients
- Random seed-based determinism for consistent results
- Cache prevention mechanisms

## Troubleshooting

### Common Issues

1. **"Failed to fetch" errors**:
   - Make sure the Python API server is running
   - Check that port 5000 is not in use by another application
   - Verify there are no firewall restrictions

2. **Identical prediction results**:
   - The application includes cache prevention and randomness to ensure varied results
   - If you still see identical results, try using a different machine name

3. **Command not found errors**:
   - Make sure Python is in your system PATH
   - Try running the commands directly: `python predict_api.py` and `npm run dev`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created for the Tech Sprint project
- Uses open-source libraries and frameworks 