import React from 'react';

interface StepCardProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          {icon}
        </div>
        <span className="ml-auto text-sm font-medium text-blue-600">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}