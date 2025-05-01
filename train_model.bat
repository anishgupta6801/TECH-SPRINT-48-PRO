@echo off
echo Installing required Python packages...
pip install --user flask==2.0.1
pip install --user flask-cors==3.0.10

echo Running mock training script...
cd src\components
python train_time_to_failure_rf.py

echo Training completed. 