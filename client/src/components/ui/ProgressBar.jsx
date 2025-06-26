import React from 'react';
import { clsx } from 'clsx';

export const ProgressBar = ({
  current,
  goal,
  className,
  showPercentage = false,
  color = 'purple'
}) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className={clsx('w-full', className)}>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={clsx(
            'h-full rounded-full transition-all duration-500 ease-out',
            {
              'bg-gradient-to-r from-purple-500 to-purple-600': color === 'purple',
              'bg-gradient-to-r from-emerald-500 to-emerald-600': color === 'emerald',
              'bg-gradient-to-r from-orange-500 to-orange-600': color === 'orange',
            }
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="mt-1 text-sm text-gray-600 text-right">
          {percentage.toFixed(1)}%
        </div>
      )}
    </div>
  );
};