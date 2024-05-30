import React from 'react'
import { Bar } from 'react-chartjs-2';

const Traffic_Website = () => {
    const data = [
        { name: 'Google', value: 20 },
        { name: 'YouTube', value: 40 },
        { name: 'Instagram', value: 25 },
        { name: 'Pinterest', value: 35 },
        { name: 'Facebook', value: 20 },
        { name: 'Twitter', value: 25 },
      ];
    
      // Find the maximum value to normalize the widths
      const maxValue = Math.max(...data.map(item => item.value));
    
      return (
        <div className="max-w-sm mx-auto text-white p-4 rounded-lg shadow-lg">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-8">
              <span>{item.name}</span>
              <div className="bg-gray-700 rounded-full h-2 w-1/2 mx-2">
                <div 
                  className="bg-gray-400 h-2 rounded-full" 
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      );
    };

export default Traffic_Website