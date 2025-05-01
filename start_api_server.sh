#!/bin/bash
echo "Installing required Python packages..."
pip install -r requirements.txt

echo "Starting AI prediction API server..."
cd src/components
python predict_api.py 