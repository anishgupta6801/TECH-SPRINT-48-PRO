// src/services/predictionApi.ts
export async function predictTimeToFailure(features: {
  machine_name: string;
  age_years: number;
  usage_hours: number;
  last_maintenance_days: number;
  failures_last_year: number;
  avg_output: number;
  quality_issues: number;
  cost_per_hour: number;
}) {
  // Add a timestamp to prevent caching
  const timestamp = new Date().getTime();
  const url = `http://localhost:5000/predict?t=${timestamp}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate', 
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    body: JSON.stringify(features),
  });

  if (!response.ok) {
    throw new Error('Prediction API error');
  }

  return response.json(); // { predicted_time_to_failure_days: number, machine_name: string, ... }
}