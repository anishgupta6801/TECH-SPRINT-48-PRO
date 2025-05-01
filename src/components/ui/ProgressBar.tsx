import React from 'react';

type ProgressBarProps = {
  value: number;
  max: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  showValue = false,
  size = 'md', 
  variant = 'default',
  className = '' 
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const getVariantColor = () => {
    if (variant !== 'default') {
      return {
        success: 'bg-green-500',
        warning: 'bg-amber-500',
        danger: 'bg-red-500',
        info: 'bg-blue-500',
      }[variant];
    }

    // Default gradient based on percentage
    if (percentage <= 30) return 'bg-green-500';
    if (percentage <= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeStyles[size]} ${className}`}>
      <div
        className={`${getVariantColor()} rounded-full transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      >
        {showValue && size === 'lg' && (
          <span className="px-2 text-xs font-medium text-white">{Math.round(percentage)}%</span>
        )}
      </div>
      {showValue && size !== 'lg' && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;