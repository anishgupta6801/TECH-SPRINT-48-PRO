import React from 'react';

type HealthIndicatorProps = {
  score: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
};

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ 
  score, 
  size = 'md', 
  showValue = true,
  className = '' 
}) => {
  // Normalize score to 0-100 range
  const normalizedScore = Math.min(Math.max(0, score), 100);
  
  // Get color based on score
  const getColor = () => {
    if (normalizedScore >= 80) return 'text-green-500';
    if (normalizedScore >= 60) return 'text-emerald-500';
    if (normalizedScore >= 40) return 'text-amber-500';
    if (normalizedScore >= 20) return 'text-orange-500';
    return 'text-red-500';
  };

  const getBgColor = () => {
    if (normalizedScore >= 80) return 'bg-green-100';
    if (normalizedScore >= 60) return 'bg-emerald-100';
    if (normalizedScore >= 40) return 'bg-amber-100';
    if (normalizedScore >= 20) return 'bg-orange-100';
    return 'bg-red-100';
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base'
  };
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`rounded-full flex items-center justify-center font-bold ${getBgColor()} ${getColor()} ${sizeClasses[size]}`}>
        {normalizedScore}
      </div>
      {showValue && (
        <span className={`mt-1 font-medium ${getColor()}`}>
          {normalizedScore < 40 ? 'Critical' : 
           normalizedScore < 60 ? 'Poor' : 
           normalizedScore < 80 ? 'Good' : 'Excellent'}
        </span>
      )}
    </div>
  );
};

export default HealthIndicator;