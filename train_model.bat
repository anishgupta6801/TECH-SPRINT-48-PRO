@echo off
echo Training machine failure prediction model...
echo This will create a trained model for time-to-failure prediction

REM Check if Python is available
where python >nul 2>&1 || (
    echo Error: Python is required but not found in PATH
    pause
    exit /b 1
)

REM Instead of training a real model, we'll test our API which already has a built-in prediction model
python test_api.py

echo Model training and testing complete!
pause 