import React from 'react';

interface PredictionResultProps {
  predictedDays: number;
  machineName: string;
  className?: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ 
  predictedDays, 
  machineName,
  className = '' 
}) => {
  // Determine severity level based on predicted days
  const getSeverityLevel = (days: number) => {
    if (days <= 7) return { level: 'critical', color: 'red', textColor: 'text-red-600', bgColor: 'bg-red-100', textDarkColor: 'text-red-800', fillColor: 'bg-red-500' };
    if (days <= 14) return { level: 'high', color: 'orange', textColor: 'text-orange-600', bgColor: 'bg-orange-100', textDarkColor: 'text-orange-800', fillColor: 'bg-orange-500' };
    if (days <= 30) return { level: 'moderate', color: 'yellow', textColor: 'text-yellow-600', bgColor: 'bg-yellow-100', textDarkColor: 'text-yellow-800', fillColor: 'bg-yellow-500' };
    return { level: 'low', color: 'green', textColor: 'text-green-600', bgColor: 'bg-green-100', textDarkColor: 'text-green-800', fillColor: 'bg-green-500' };
  };

  const severity = getSeverityLevel(predictedDays);

  return (
    <div className={`p-4 bg-white rounded-lg shadow ${className}`}>
      <h2 className="text-lg font-medium mb-2">Prediction Result for {machineName}</h2>
      
      <div className="flex flex-col items-center py-4">
        <div className={`text-4xl font-bold ${severity.textColor} mb-2`}>
          {Math.round(predictedDays)} days
        </div>
        <div className="text-sm text-gray-500">Estimated time until failure</div>
        
        <div className={`mt-4 px-4 py-1 rounded-full ${severity.bgColor} ${severity.textDarkColor} text-sm font-medium`}>
          {severity.level.charAt(0).toUpperCase() + severity.level.slice(1)} risk level
        </div>
        
        <div className="mt-6 w-full">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={severity.fillColor}
              style={{ 
                width: `${Math.min(100, Math.max(0, 100 - (predictedDays / 90) * 100))}%`,
                height: '100%'
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Critical</span>
            <span>Low Risk</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Based on the provided parameters, the AI model predicts that <strong>{machineName}</strong> will
          likely fail in approximately <strong>{Math.round(predictedDays)} days</strong>.
        </p>
        
        {predictedDays <= 14 && (
          <div className="mt-3 p-3 bg-red-50 text-red-700 rounded-md">
            <strong>Recommendation:</strong> Schedule maintenance for <strong>{machineName}</strong> within the next 
            {predictedDays <= 7 ? ' 48 hours' : ' week'} to prevent unexpected downtime.
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionResult; 