@echo off
echo Starting PredictPro AI Application...
echo.

REM Check if python is installed
where python >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: Python is not installed or not in your PATH
    echo Please install Python and try again.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Error: npm is not installed or not in your PATH
    echo Please install Node.js and npm, then try again.
    pause
    exit /b 1
)

echo [1/2] Starting Python API Server...
start "API Server" cmd /c "python predict_api.py"

echo [2/2] Starting React Frontend...
start "React Frontend" cmd /c "npm run dev"

echo.
echo Both services started! Access the app at http://localhost:5173
echo.
echo Press any key to shutdown all services...
pause

echo Shutting down services...
taskkill /f /im python.exe >nul 2>&1
taskkill /f /im node.exe >nul 2>&1
echo Done!
pause 