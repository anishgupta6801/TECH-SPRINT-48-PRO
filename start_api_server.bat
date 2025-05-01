@echo off
echo Installing required Python packages...
pip install --user flask==2.0.1
pip install --user flask-cors==3.0.10

echo Starting AI prediction API server...
cd src\components
python predict_api.py 