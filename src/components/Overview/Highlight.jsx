import React from 'react';

const data = [
  { category: 'Food & Beverages', value: 80000 },
  { category: 'Education', value: 120000 },
  { category: 'Fashion & Beauty', value: 60000 },
  { category: 'Transportation', value: 100000 },
  { category: 'Investment', value: 80000 },
];

const total = data.reduce((acc, curr) => acc + curr.value, 0);

const Highlight = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-white text-xl font-bold mb-4">Highlight</h2>
      <p className="text-white text-sm mb-6">Spending Rp{total.toLocaleString()}</p>
      <div className="flex justify-center">
        <div className="w-40 h-40 relative">
          <div className="absolute inset-0 rounded-full border-8 border-gray-800"></div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`absolute rounded-full border-8 border-transparent transform -rotate-${
                (index / data.length) * 360
              }deg`}
              style={{
                background: `conic-gradient(from ${(index / data.length) * 360}deg, #fff 0deg ${
                  (item.value / total) * 360
                }deg, transparent ${(item.value / total) * 360}deg 360deg)`,
                width: `calc(100% - 2rem)`,
                height: `calc(100% - 2rem)`,
                left: '1rem',
                top: '1rem',
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className={`w-4 h-4 rounded-full mr-2`}
              style={{ backgroundColor: `hsl(${(index / data.length) * 360}, 100%, 50%)` }}
            ></div>
            <p className="text-white text-sm">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;