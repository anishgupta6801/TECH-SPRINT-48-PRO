import React from 'react';
import { Card, CardContent } from './Card';

type InfoCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
  };
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className = '' 
}) => {
  const getTrendColor = () => {
    if (!trend) return 'text-gray-500';
    
    const { direction } = trend;
    if (direction === 'up') return 'text-green-500';
    if (direction === 'down') return 'text-red-500';
    return 'text-gray-500';
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    
    const { direction } = trend;
    if (direction === 'up') return '↑';
    if (direction === 'down') return '↓';
    return '→';
  };

  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
        <div className="mt-2 flex-grow">
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          {trend && (
            <div className={`mt-1 text-sm ${getTrendColor()} flex items-center`}>
              <span className="mr-1">{getTrendIcon()}</span>
              <span>{Math.abs(trend.value)}%</span>
              <span className="ml-1 text-gray-500">vs last period</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;