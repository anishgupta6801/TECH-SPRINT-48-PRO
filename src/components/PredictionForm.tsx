import React, { useState } from 'react';
import { predictTimeToFailure } from '../predictionApi';

interface PredictionFormProps {
  equipmentId?: string;
  onPredictionResult?: (result: { predicted_time_to_failure_days: number, machine_name: string }) => void;
  className?: string;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ 
  equipmentId, 
  onPredictionResult,
  className = '' 
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    machine_name: '',
    age_years: 5,
    usage_hours: 1000,
    last_maintenance_days: 30,
    failures_last_year: 2,
    avg_output: 85,
    quality_issues: 5,
    cost_per_hour: 250
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'machine_name' ? value : parseFloat(value)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.machine_name.trim()) {
      setError('Machine name is required');
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const result = await predictTimeToFailure(formData);
      if (onPredictionResult) {
        onPredictionResult({
          ...result,
          machine_name: formData.machine_name
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get prediction');
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow ${className}`}>
      <h2 className="text-lg font-medium mb-4">Predict Time to Failure</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Machine Name
            </label>
            <input
              type="text"
              name="machine_name"
              value={formData.machine_name}
              onChange={handleChange}
              required
              placeholder="Enter machine name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age (years)
            </label>
            <input
              type="number"
              name="age_years"
              value={formData.age_years}
              onChange={handleChange}
              min="0"
              step="0.1"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usage (hours)
            </label>
            <input
              type="number"
              name="usage_hours"
              value={formData.usage_hours}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Maintenance (days ago)
            </label>
            <input
              type="number"
              name="last_maintenance_days"
              value={formData.last_maintenance_days}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Failures Last Year
            </label>
            <input
              type="number"
              name="failures_last_year"
              value={formData.failures_last_year}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Average Output (%)
            </label>
            <input
              type="number"
              name="avg_output"
              value={formData.avg_output}
              onChange={handleChange}
              min="0"
              max="100"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quality Issues
            </label>
            <input
              type="number"
              name="quality_issues"
              value={formData.quality_issues}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost per Hour ($)
            </label>
            <input
              type="number"
              name="cost_per_hour"
              value={formData.cost_per_hour}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Getting Prediction...' : 'Predict Time to Failure'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm; 