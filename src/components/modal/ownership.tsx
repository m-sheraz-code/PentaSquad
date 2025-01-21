import { Modal } from './modal';
import { useState } from 'react';
import { PiHandshake } from "react-icons/pi";

export function Ownership() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    '3 income generating models within a single model.',
    'High ticket investment model',
    'Get reports and guidlines every month',
    'Complete transparency throughout the business process.'
  ];

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center text-md font-bold gap-2 border-2 shadow-md border-gray-200 p-1.5 rounded-lg transition-transform transform hover:bg-indigo-600 hover:text-white hover:scale-110"
      >
        <PiHandshake className="size-5" />
        Ownership Mark
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <PiHandshake className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Ownership Mark</h2>
          </div>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Got it
          </button>
        </div>
      </Modal>
    </>
  );
}