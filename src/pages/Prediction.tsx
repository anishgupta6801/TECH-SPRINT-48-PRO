import React, { useState } from 'react';
import ClassicLayout from '../components/ClassicLayout';
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
    // Scroll to the result if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const resultElement = document.getElementById('prediction-result');
        resultElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <ClassicLayout>
      <div className="space-y-6">
        <div className="bg-white px-6 py-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-blue-800">PredictPro AI Failure Prediction</h1>
          <p className="text-gray-600 mt-1">
            Enter your machine name and parameters to predict when it might fail based on its characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PredictionForm onPredictionResult={handlePredictionResult} />
          
          {predictionResult ? (
            <PredictionResult 
              predictedDays={predictionResult.predicted_time_to_failure_days}
              machineName={predictionResult.machine_name}
            />
          ) : (
            <div id="prediction-result" className="flex items-center justify-center h-full min-h-[300px] border border-dashed border-blue-200 rounded-md bg-blue-50 p-6">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h3 className="text-xl font-medium text-blue-800 mb-2">No Prediction Results Yet</h3>
                <p className="text-gray-600">Fill out the form to get your prediction results</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ClassicLayout>
  );
};

export default Prediction; 