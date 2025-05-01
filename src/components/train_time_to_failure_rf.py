import random

def simulate_model_training():
    """
    This is a mock function that simulates training a machine learning model.
    In a real scenario, this would train and save an actual model.
    """
    print("=== Equipment Failure Prediction Model ===")
    print("This is a simplified mock version that doesn't require ML libraries.")
    print("No actual model is being trained or saved.")
    print("\nThe mock implementation uses a simple formula:")
    print("predicted_days = 500 - 15*age - 0.01*usage - 0.5*maintenance_days - 20*failures + 2*avg_output - quality_issues - 0.05*cost")
    print("\nSample predictions:")
    
    # Generate a few sample predictions
    sample_equipment = [
        {"name": "Pump #1", "age_years": 2, "usage_hours": 1000, "last_maintenance_days": 15, 
         "failures_last_year": 0, "avg_output": 95, "quality_issues": 2, "cost_per_hour": 150},
        
        {"name": "Motor #3", "age_years": 8, "usage_hours": 5000, "last_maintenance_days": 90,
         "failures_last_year": 3, "avg_output": 80, "quality_issues": 15, "cost_per_hour": 300},
         
        {"name": "Compressor #2", "age_years": 15, "usage_hours": 8000, "last_maintenance_days": 180,
         "failures_last_year": 5, "avg_output": 65, "quality_issues": 28, "cost_per_hour": 500}
    ]
    
    for equipment in sample_equipment:
        # Apply the same formula as in the API
        predicted_days = (
            500 
            - 15 * equipment["age_years"] 
            - 0.01 * equipment["usage_hours"] 
            - 0.5 * equipment["last_maintenance_days"] 
            - 20 * equipment["failures_last_year"] 
            + 2 * equipment["avg_output"] 
            - 1 * equipment["quality_issues"] 
            - 0.05 * equipment["cost_per_hour"]
        )
        
        # Add some randomness
        predicted_days += random.uniform(-20, 20)
        
        # Ensure prediction is positive and reasonable
        predicted_days = max(1, min(predicted_days, 365))
        
        # Print the prediction
        print(f"\n{equipment['name']}:")
        print(f"  Age: {equipment['age_years']} years")
        print(f"  Usage: {equipment['usage_hours']} hours")
        print(f"  Last maintenance: {equipment['last_maintenance_days']} days ago")
        print(f"  Failures last year: {equipment['failures_last_year']}")
        print(f"  Average output: {equipment['avg_output']}%")
        print(f"  Quality issues: {equipment['quality_issues']}")
        print(f"  Cost per hour: ${equipment['cost_per_hour']}")
        print(f"  Predicted time to failure: {round(predicted_days)} days")
    
    print("\nMock training completed successfully!")
    print("You can now run the API server with 'python predict_api.py'")

if __name__ == "__main__":
    simulate_model_training()
