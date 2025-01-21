import { useState, useEffect } from "react";

export const Stats = () => {
  const statsData = [
    { label: "New PLs Generated so far...", value: 70, suffix: "+" },
    { label: "Record Breaking Returns", value: 35, suffix: "%" },
    { label: "Satisfactory Rate", value: 95, suffix: "%" },
    { label: "Satisfactory Rate", value: 80, suffix: "+" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    //@ts-ignore
    const intervals: NodeJS.Timeout[] = [];

    statsData.forEach((stat, index) => {
      const increment = Math.ceil(stat.value / 50);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });
      }, 20);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-indigo-600 w-[84%] text-white py-16 rounded-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Driving Real Results</h2>
        <p className="text-center mb-12">Our track record speaks volumes.</p>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
