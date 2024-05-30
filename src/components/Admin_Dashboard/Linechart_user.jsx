import React from "react";
import { Line } from "react-chartjs-2";

export default function Linechart_user() {
  return (
    <div className="relative p-5 rounded-lg mt-6 text-white" style={{ maxWidth: '100%', height: 'auto' }}>
      <div className="relative w-full h-64 md:h-96 lg:h-[300px]">
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "This year",
                data: [0, 9900, 8500, 23000, 15000, 3000, 12000],
                borderColor: '#10b981',
                borderDash: [],
                fill: false,
                tension: 0.4,
              },
              {
                label: "Last year",
                data: [9000, 5000, 8000, 18000, 5000, 10000, 8000],
                borderColor: '#64748b',
                borderDash: [10, 5],
                fill: false,
                tension: 0.4,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: '#cbd5e1',
                  padding: 15,
                  maxRotation: 0,
                  autoSkip: true,
                }
              },
              y: {
                grid: {
                  color: '#64748b'
                },
                ticks: {
                  color: '#cbd5e1',
                  callback: function(value) {
                    return value / 1000 + 'k';
                  },
                  stepSize: 10000,
                },
                min: 0,
                max: 30000,
              }
            },
            plugins: {
              legend: {
                display: false
              }
            },
            layout: {
              padding: {
                bottom: 20
              }
            }
          }}
        />
      </div>
    </div>
  );
}
