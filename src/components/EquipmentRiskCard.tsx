import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import ProgressBar from './ui/ProgressBar';
import Badge from './ui/Badge';
import { EquipmentRiskScore, Equipment } from '../types';

type EquipmentRiskCardProps = {
  equipment: Equipment;
  riskScore: EquipmentRiskScore;
  onClick?: () => void;
  className?: string;
};

const EquipmentRiskCard: React.FC<EquipmentRiskCardProps> = ({ 
  equipment, 
  riskScore, 
  onClick,
  className = '' 
}) => {
  const getPriorityBadge = (score: number) => {
    if (score >= 75) return <Badge variant="danger">Critical</Badge>;
    if (score >= 50) return <Badge variant="warning">High</Badge>;
    if (score >= 25) return <Badge variant="info">Medium</Badge>;
    return <Badge variant="success">Low</Badge>;
  };

  const getTimeFrameBadge = (days: number) => {
    if (days <= 7) return <Badge variant="danger" size="sm">{days} Days</Badge>;
    if (days <= 14) return <Badge variant="warning" size="sm">{days} Days</Badge>;
    return <Badge variant="info" size="sm">{days} Days</Badge>;
  };

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg">{equipment.name}</CardTitle>
        <div className="flex space-x-2">
          {getPriorityBadge(riskScore.score)}
          {getTimeFrameBadge(riskScore.timeFrame)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <div className="mb-1 flex justify-between">
            <span className="text-sm text-gray-500">Risk Score</span>
            <span className="text-sm font-medium">{riskScore.score}%</span>
          </div>
          <ProgressBar 
            value={riskScore.score} 
            max={100} 
            variant={riskScore.score >= 75 ? 'danger' : riskScore.score >= 50 ? 'warning' : 'default'}
          />
        </div>
        
        <div className="text-sm text-gray-600 mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-500">Type:</span> {equipment.type}
            </div>
            <div>
              <span className="text-gray-500">Location:</span> {equipment.location}
            </div>
            <div>
              <span className="text-gray-500">Downtime Cost:</span> ${equipment.costPerHour}/hr
            </div>
            <div>
              <span className="text-gray-500">Confidence:</span> {riskScore.confidence}%
            </div>
          </div>
        </div>
        
        {riskScore.contributingFactors.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Contributing Factors</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {riskScore.contributingFactors.slice(0, 2).map((factor, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                  {factor.factor}
                </li>
              ))}
              {riskScore.contributingFactors.length > 2 && (
                <li className="text-xs text-blue-600">+ {riskScore.contributingFactors.length - 2} more factors</li>
              )}
            </ul>
          </div>
        )}
      </CardContent>
      
      {riskScore.recommendedActions.length > 0 && (
        <CardFooter className="flex-col items-stretch bg-gray-50">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Action</h4>
          <div className="text-sm">
            {riskScore.recommendedActions[0].action}
            <div className="mt-1 flex justify-between text-xs">
              <span className="text-gray-500">
                Est. Cost: <span className="font-medium">${riskScore.recommendedActions[0].estimatedCost.toLocaleString()}</span>
              </span>
              <span className="text-green-600">
                Potential Savings: <span className="font-medium">${riskScore.recommendedActions[0].potentialSavings.toLocaleString()}</span>
              </span>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default EquipmentRiskCard;