// src/services/predictionApi.ts
export async function predictTimeToFailure(features: {
  age_years: number;
  usage_hours: number;
  last_maintenance_days: number;
  failures_last_year: number;
  avg_output: number;
  quality_issues: number;
  cost_per_hour: number;
}) {
  const response = await fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(features),
  });

  if (!response.ok) {
    throw new Error('Prediction API error');
  }

  return response.json(); // { predicted_time_to_failure_days: number }
}