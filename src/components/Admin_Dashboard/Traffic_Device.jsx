import React from "react";
import { TEChart } from "tw-elements-react";

export default function Traffic_Device() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 text-white rounded-lg">
      <div className="flex items-center mb-4 ml-5">
        <h2 className="text-lg font-semibold">Traffic by Device</h2>
      </div>
      <div className="relative p-2 rounded-lg ">
        <div className="relative h-64 md:h-95">
          <TEChart
            type="bar"
            data={{
              labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
              datasets: [
                {
                  label: "Traffic",
                  data: [16, 26, 20, 28, 9, 21],
                  backgroundColor: [
                    "rgba(191, 117, 229, 1)",
                    "rgba(88, 199, 116, 1)",
                    "rgba(51, 149, 255, 1)",
                    "rgba(89, 192, 210, 1)",
                    "rgba(91, 189, 235, 1)",
                    "rgba(255, 98, 89, 1)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                  borderRadius: 10,
                  barPercentage: 0.3,
                  categoryPercentage: 1,
                },
              ],
            }}
            options={{
              responsive: true, // Membuat chart responsif
              maintainAspectRatio: false, // Memungkinkan chart untuk menyesuaikan tinggi dan lebar container
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#ffffff",
                  },
                },
                y: {
                  ticks: {
                    color: "#ffffff",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
