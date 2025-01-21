import { MessageSquare, Wallet, FileCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: 'Connect with Us',
    description: 'Start your journey by reaching out to our team'
  },
  {
    icon: <Wallet className="w-8 h-8 text-blue-600" />,
    title: 'Select Your Investment',
    description: 'Choose from our range of investment options'
  },
  {
    icon: <FileCheck className="w-8 h-8 text-blue-600" />,
    title: 'Complete Documentation',
    description: 'Submit all required documents securely'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: 'Enjoy Your Returns',
    description: 'Watch your investment grow'
  }
];

export const Steps = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Join Us in Few Steps</h2>
        <p className="text-gray-600 text-center mb-12">
          Follow these steps to become a satisfied client and start your success story.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg transition-transform transform hover:scale-110">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 lg:w-64 lg:px-8">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}