import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  action?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, action }) => {
  return (
    <div className="bg-blue-700 p-8 rounded-xl">
      <div className="text-5xl font-bold mb-3">{value}</div>
      <p className="text-blue-100 mb-4">{label}</p>
      {action && (
        <button className="text-sm text-blue-200 hover:text-white underline">
          {action}
        </button>
      )}
    </div>
  );
}