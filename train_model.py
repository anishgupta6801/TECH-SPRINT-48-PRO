import pandas as pd
import numpy as np
import joblib
from xgboost import XGBRegressor
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import mean_absolute_error, r2_score, mean_squared_error
from sklearn.preprocessing import StandardScaler
import os

# Create directory for models if it doesn't exist
os.makedirs('models', exist_ok=True)

def generate_synthetic_data(n_samples=1000):
    np.random.seed(42)
    
    # Generate more realistic data with temporal patterns
    data = {
        'machine_type': np.random.choice(['Pump', 'Turbine', 'Motor', 'Press', 'Drill',
                                        'Hydraulic', 'Conveyor', 'Compressor', 
                                        'Generator', 'Robot'], n_samples),
        'age_years': np.random.uniform(0, 20, n_samples),
        'usage_hours': np.random.uniform(0, 100000, n_samples),
        'last_maintenance_days': np.random.uniform(0, 365, n_samples),
        'failures_last_year': np.random.randint(0, 10, n_samples),
        'avg_output': np.random.uniform(50, 100, n_samples),
        'quality_issues': np.random.uniform(0, 100, n_samples),
        'cost_per_hour': np.random.uniform(100, 10000, n_samples),
        'temperature': np.random.uniform(20, 80, n_samples),  # Operating temperature
        'vibration_level': np.random.uniform(0, 10, n_samples),  # Vibration measurements
        'power_consumption': np.random.uniform(50, 150, n_samples),  # % of rated power
        'maintenance_cost_history': np.random.uniform(1000, 50000, n_samples),
        'environment_humidity': np.random.uniform(30, 70, n_samples),
        'operational_stress': np.random.uniform(0, 100, n_samples)
    }
    
    # Create a DataFrame
    df = pd.DataFrame(data)
    
    # Add derived features
    df['maintenance_frequency'] = df['age_years'] * 365 / (df['last_maintenance_days'] + 1)
    df['cost_per_output'] = df['cost_per_hour'] / (df['avg_output'] + 1)
    df['stress_factor'] = df['vibration_level'] * df['operational_stress'] / 100
    
    # Encode machine type as one-hot
    df = pd.get_dummies(df, columns=['machine_type'], prefix='machine')
    
    # Create a more sophisticated time to failure calculation
    time_to_failure = (
        500  # base days
        - 25 * df['age_years']  # age impact
        - 0.008 * df['usage_hours']  # usage impact
        - 0.4 * df['last_maintenance_days']  # maintenance impact
        - 40 * df['failures_last_year']  # failure history impact
        + 4 * df['avg_output']  # performance impact
        - 2.5 * df['quality_issues']  # quality impact
        - 0.03 * df['cost_per_hour']  # cost impact
        - 0.5 * df['temperature']  # temperature stress
        - 15 * df['vibration_level']  # vibration impact
        - 0.2 * df['power_consumption']  # power consumption impact
        - 0.2 * df['environment_humidity']  # environmental impact
        - 0.8 * df['operational_stress']  # operational stress
        + 0.1 * df['maintenance_frequency']  # maintenance frequency impact
    )
    
    # Add realistic noise and ensure reasonable bounds
    time_to_failure = time_to_failure + np.random.normal(0, 30, n_samples)
    time_to_failure = np.maximum(time_to_failure, 1)  # minimum 1 day
    time_to_failure = np.minimum(time_to_failure, 730)  # maximum 2 years
    
    df['time_to_failure_days'] = time_to_failure.astype(int)
    
    return df

# Generate more training data
print("Generating synthetic training data...")
data = generate_synthetic_data(n_samples=5000)  # Increased sample size

# Split features and target
X = data.drop('time_to_failure_days', axis=1)
y = data['time_to_failure_days']

# Scale the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
X_scaled = pd.DataFrame(X_scaled, columns=X.columns)

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Train XGBoost model
print("Training XGBoost model...")
xgb_model = XGBRegressor(
    n_estimators=200,
    learning_rate=0.1,
    max_depth=7,
    min_child_weight=3,
    subsample=0.8,
    colsample_bytree=0.8,
    gamma=0,
    objective='reg:squarederror',
    random_state=42,
    n_jobs=-1
)

# Perform cross-validation
cv_scores = cross_val_score(xgb_model, X_train, y_train, cv=5, scoring='neg_mean_squared_error')
cv_rmse = np.sqrt(-cv_scores)
print(f"\nCross-validation RMSE scores: {cv_rmse}")
print(f"Average RMSE: {cv_rmse.mean():.2f} days (+/- {cv_rmse.std() * 2:.2f})")

# Train the final model
xgb_model.fit(X_train, y_train)

# Evaluate the model
y_pred = xgb_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"\nModel performance:")
print(f"Mean Absolute Error: {mae:.2f} days")
print(f"Root Mean Squared Error: {rmse:.2f} days")
print(f"R² Score: {r2:.4f}")

# Get feature importance
feature_importance = pd.DataFrame({
    'Feature': X.columns,
    'Importance': xgb_model.feature_importances_
}).sort_values('Importance', ascending=False)

print("\nTop 10 Most Important Features:")
print(feature_importance.head(10))

# Save the model and scaler
model_path = 'models/failure_prediction_xgb.joblib'
scaler_path = 'models/feature_scaler.joblib'
joblib.dump(xgb_model, model_path)
joblib.dump(scaler, scaler_path)
print(f"\nModel saved to {model_path}")
print(f"Scaler saved to {scaler_path}")

# Save feature list for prediction
feature_list = list(X.columns)
joblib.dump(feature_list, 'models/feature_list.joblib')
print("Feature list saved") 