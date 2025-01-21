import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  cta
}) => {
  return (
    <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-50 w-14 h-14 flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <span className="text-blue-600 mr-3">•</span>
            <span className="text-gray-600 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 text-sm">
        {cta}
        <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
}