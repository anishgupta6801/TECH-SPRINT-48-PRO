#!/bin/bash
echo "Installing required Python packages..."
pip install -r requirements.txt

echo "Training the machine learning model..."
cd src/components
python train_time_to_failure_rf.py 