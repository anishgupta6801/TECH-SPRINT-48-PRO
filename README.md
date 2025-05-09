# PredictPro AI Application

This is a full-stack application that combines a Python backend for AI predictions with a React frontend for user interaction.

## Prerequisites

Before running the application, make sure you have the following installed:

1. Python (3.8 or higher)
2. Node.js and npm
3. Git (for cloning the repository)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/anishgupta6801/TECH-SPRINT-48-PRO.git
   cd TECH-SPRINT-48-PRO
   ```

2. Set up the Python environment:
   ```bash
   # Create a virtual environment
   python -m venv venv

   # Activate the virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   # Install Python dependencies
   pip install -r requirements.txt
   ```

3. Set up the React frontend:
   ```bash
   # Install Node.js dependencies
   npm install
   ```

## Running the Application

### Method 1: Using the Batch File (Windows)

The easiest way to run the application is using the provided batch file:

1. Simply double-click `start_app.bat`
   - This will start both the Python backend and React frontend
   - The application will be available at http://localhost:5173

2. To stop the application:
   - Press any key in the command prompt window
   - This will automatically shut down both services

### Method 2: Manual Start

If you prefer to run the services manually:

1. Start the Python backend:
   ```bash
   # Make sure your virtual environment is activated
   python predict_api.py
   ```

2. In a new terminal, start the React frontend:
   ```bash
   npm run dev
   ```

3. Access the application at http://localhost:5173

## Troubleshooting

If you encounter any issues:

1. Make sure all prerequisites are installed correctly
2. Verify that both Python and Node.js are in your system's PATH
3. Ensure no other applications are using ports 5173 (frontend) or 8000 (backend)
4. Check that your virtual environment is activated when running the Python backend

## Project Structure

- `predict_api.py` - Python backend server
- `src/` - React frontend source code
- `start_app.bat` - Windows batch file for easy startup
- `requirements.txt` - Python dependencies
- `package.json` - Node.js dependencies

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository. 