import React, { useState } from 'react';
import Layout from '../components/Layout';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';

interface PredictionResultData {
  predicted_time_to_failure_days: number;
  machine_name: string;
}

const Prediction: React.FC = () => {
  const [predictionResult, setPredictionResult] = useState<PredictionResultData | null>(null);

  const handlePredictionResult = (result: PredictionResultData) => {
    setPredictionResult(result);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white px-6 py-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-800">AI-Powered Failure Prediction</h1>
          <p className="text-gray-600 mt-1">
            Enter your machine name and parameters to predict when it might fail based on its characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PredictionForm onPredictionResult={handlePredictionResult} />
          
          {predictionResult && (
            <PredictionResult 
              predictedDays={predictionResult.predicted_time_to_failure_days}
              machineName={predictionResult.machine_name}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Prediction; 