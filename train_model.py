import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import os

# Create directory for models if it doesn't exist
os.makedirs('models', exist_ok=True)

# Generate synthetic training data (in a real scenario, this would be historical data)
def generate_synthetic_data(n_samples=1000):
    np.random.seed(42)
    
    data = {
        'machine_type': np.random.choice(['Blast Furnace', 'Robotic System', 'Cutting Machine', 
                                         'Environmental Control', 'Welding Unit', 
                                         'Process Control', 'Packaging Line', 'Strip Mill', 
                                         'Water Treatment', 'Generator'], n_samples),
        'age_years': np.random.uniform(0, 15, n_samples),
        'usage_hours': np.random.uniform(0, 50000, n_samples),
        'last_maintenance_days': np.random.uniform(0, 365, n_samples),
        'failures_last_year': np.random.randint(0, 5, n_samples),
        'avg_output': np.random.uniform(50, 100, n_samples),
        'quality_issues': np.random.uniform(0, 50, n_samples),
        'cost_per_hour': np.random.uniform(500, 5000, n_samples),
    }
    
    # Create a DataFrame
    df = pd.DataFrame(data)
    
    # Encode machine type as one-hot
    df = pd.get_dummies(df, columns=['machine_type'], prefix='machine')
    
    # Create a realistic time to failure based on features
    time_to_failure = (
        500  # base
        - 30 * df['age_years']  # older machines fail sooner
        - 0.01 * df['usage_hours']  # more usage leads to earlier failure
        - 0.5 * df['last_maintenance_days']  # longer since maintenance, sooner failure
        - 50 * df['failures_last_year']  # previous failures indicate likelihood of future ones
        + 5 * df['avg_output']  # better output often means better condition
        - 3 * df['quality_issues']  # quality issues suggest impending problems
        - 0.05 * df['cost_per_hour']  # higher cost machines sometimes have more complex failure modes
    )
    
    # Add some noise and ensure positive values
    time_to_failure = time_to_failure + np.random.normal(0, 50, n_samples)
    time_to_failure = np.maximum(time_to_failure, 1)  # minimum 1 day
    time_to_failure = np.minimum(time_to_failure, 730)  # maximum ~2 years
    
    df['time_to_failure_days'] = time_to_failure.astype(int)
    
    return df

# Generate data
print("Generating synthetic training data...")
data = generate_synthetic_data(n_samples=2000)

# Split features and target
X = data.drop('time_to_failure_days', axis=1)
y = data['time_to_failure_days']

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"Training data shape: {X_train.shape}")
print(f"Testing data shape: {X_test.shape}")

# Train a Random Forest model
print("Training Random Forest model...")
rf_model = RandomForestRegressor(
    n_estimators=100, 
    max_depth=15,
    min_samples_split=5,
    min_samples_leaf=2,
    n_jobs=-1,
    random_state=42
)

rf_model.fit(X_train, y_train)

# Evaluate the model
y_pred = rf_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Model performance:")
print(f"Mean Absolute Error: {mae:.2f} days")
print(f"R² Score: {r2:.4f}")

# Get feature importance
feature_importance = pd.DataFrame({
    'Feature': X.columns,
    'Importance': rf_model.feature_importances_
}).sort_values('Importance', ascending=False)

print("\nFeature Importance:")
print(feature_importance.head(10))

# Save the model
model_path = 'models/failure_prediction_rf.joblib'
joblib.dump(rf_model, model_path)
print(f"\nModel saved to {model_path}")

# Save feature list for prediction
feature_list = list(X.columns)
joblib.dump(feature_list, 'models/feature_list.joblib')
print("Feature list saved") 