// src/services/predictionApi.ts
export interface PredictionFeatures {
  machine_name: string;
  age_years: number;
  usage_hours: number;
  last_maintenance_days: number;
  failures_last_year: number;
  avg_output: number;
  quality_issues: number;
  cost_per_hour: number;
}

export interface PredictionResult {
  predicted_time_to_failure_days: number;
  machine_name: string;
}

export async function predictTimeToFailure(features: PredictionFeatures): Promise<PredictionResult> {
  // Add a timestamp to prevent caching
  const timestamp = new Date().getTime();
  const url = `http://localhost:5000/predict?t=${timestamp}`;
  
  try {
    console.log('Sending prediction request:', features);
    
    // First, try a preflight OPTIONS request
    try {
      const preflightResponse = await fetch(url, {
        method: 'OPTIONS',
        headers: { 
          'Content-Type': 'application/json',
        }
      });
      console.log('Preflight response:', preflightResponse.status);
    } catch (error) {
      console.warn('Preflight request failed, continuing anyway:', error);
    }
    
    // Now make the actual request
    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate', 
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      body: JSON.stringify(features),
      mode: 'cors', // Explicitly set CORS mode
      credentials: 'omit' // Don't send credentials for this API
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Received prediction result:', result);
    
    // Make sure the result has the expected structure
    if (!result.hasOwnProperty('predicted_time_to_failure_days')) {
      console.error('Invalid API response format:', result);
      throw new Error('Invalid API response format. Missing predicted_time_to_failure_days');
    }
    
    return {
      predicted_time_to_failure_days: result.predicted_time_to_failure_days,
      machine_name: result.machine_name || features.machine_name
    };
  } catch (error) {
    console.error('API connection error:', error);
    
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to the prediction API. Make sure the API server is running at http://localhost:5000');
    }
    
    // If we already created a custom error, just rethrow it
    if (error instanceof Error && (error.message.includes('API error') || error.message.includes('Invalid API'))) {
      throw error;
    }
    
    // Generic error
    throw new Error(`Prediction failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}