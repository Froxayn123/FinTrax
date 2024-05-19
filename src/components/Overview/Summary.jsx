import React, { useState } from "react";
import { TEChart } from "tw-elements-react";

export default function Summary() {
  const [period, setPeriod] = useState("Month");

  const data = {
    Day: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Income",
          data: [5, 10, 15, 20, 25, 30, 35],
          backgroundColor: "rgba(186, 85, 211, 1)", // purple
          borderColor: "rgba(128, 0, 128, 1)",
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: [3, 6, 9, 12, 15, 18, 21],
          backgroundColor: "rgba(255, 140, 0, 1)", // orange
          borderColor: "rgba(255, 165, 0, 1)",
          borderWidth: 1,
        },
      ],
    },
    Week: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Income",
          data: [100, 200, 300, 400],
          backgroundColor: "rgba(186, 85, 211, 1)", // purple
          borderColor: "rgba(128, 0, 128, 1)",
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: [80, 160, 240, 320],
          backgroundColor: "rgba(255, 140, 0, 1)", // orange
          borderColor: "rgba(255, 165, 0, 1)",
          borderWidth: 1,
        },
      ],
    },
    Month: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Income",
          data: [30, 50, 40, 55, 52, 60],
          backgroundColor: "rgba(186, 85, 211, 1)", // purple
          borderColor: "rgba(128, 0, 128, 1)",
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: [20, 25, 30, 35, 30, 35],
          backgroundColor: "rgba(255, 140, 0, 1)", // orange
          borderColor: "rgba(255, 165, 0, 1)",
          borderWidth: 1,
        },
      ],
    },
    Year: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Income",
          data: [400, 450, 500, 550, 600],
          backgroundColor: "rgba(186, 85, 211, 1)", // brighter purple
          borderColor: "rgba(128, 0, 128, 1)",
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: [350, 375, 400, 425, 450],
          backgroundColor: "rgba(255, 140, 0, 1)", // brighter orange
          borderColor: "rgba(255, 140, 0, 1)",
          borderWidth: 1,
        },
        
      ],
    },
  };

  return (
    <div style={{ padding: '20px', borderRadius: '10px', color: 'white', maxWidth: '700px', margin: '0 auto' }}>
     <div className="flex items-center mb-2">
  <h2 className="mr-auto text-lg font-semibold">Summary</h2>
  <div className="flex justify-end"> {/* Mengubah kelas flex menjadi flex justify-end */}
    {["Day", "Week", "Month", "Year"].map((periodLabel) => (
      <button
        key={periodLabel}
        onClick={() => setPeriod(periodLabel)}
        className={`px-2 py-1  border border-[color:var(--BG,#ECEFF5)] rounded-[20px] border-solid text-white ${period === periodLabel ? '[background:var(--gradient2,linear-gradient(90deg,#4E2DD1_0%,#8C3FD9_93.45%))]' : 'bg-transparent'} hover:[background:var(--gradient2,linear-gradient(90deg,#4E2DD1_0%,#8C3FD9_93.45%))] focus:outline-none focus:[background:var(--gradient2,linear-gradient(90deg,#4E2DD1_0%,#8C3FD9_93.45%))] mr-2 text-sm`}
        style={{ marginRight: '8px' }}
      >
        {periodLabel}
      </button>
    ))}
  </div>
</div>


      <p>Congrats! You've earned <span style={{ color: '#2ecc71' }}>+2,12</span> and spent <span style={{ color: '#e74c3c' }}>-2.53</span></p>
      
      <div style={{ position: 'relative', maxHeight: '400px' }}>
        <TEChart
          type="bar"
          data={data[period]}
          options={{
            plugins: {
              legend: {
                position: "bottom",
                align: "start",
                labels: {
                  color: "#ffffff",
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#ffffff",
                },
                stacked: false,
              },
              y: {
                ticks: {
                  display: false, // Hide y-axis ticks
                },
                grid: {
                  display: false, // Hide y-axis grid lines
                },
                stacked: false,
              },
            },
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
}
