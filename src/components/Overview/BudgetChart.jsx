import React from "react";
import { TEChart } from "tw-elements-react";

export default function BudgetChart() {
  const labelsLeft = [
    "F & B",
    "Education",
    "Transportation",
    "Housing",
  ];

  const labelsRight = [
    "Healthcare",
    "Entertainment",
    "Fashion",
  ];

  const backgroundColor = [
    "rgba(255, 0, 255, 1)", // Magenta
    "rgba(0, 128, 128, 1)", // Teal
    "rgba(255, 255, 0, 1)", // Yellow
    "rgba(0, 0, 255, 1)",   // Blue
    "rgba(255, 165, 0, 1)", // Orange
    "rgba(0, 128, 0, 1)",   // Green
    "rgba(128, 0, 128, 1)"  // Purple
  ];

  const data = [2112, 2343, 2545, 3423, 2365, 2000, 1800]; // Tambahkan data untuk 2 label tambahan

  return (
    <div className="flex p-2 [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
      <div className="relative w-60 h-60 border-none"> {/* Tambahkan kelas border-none di sini */}
        <TEChart
          type="doughnut"
          data={{
            labels: [...labelsLeft, ...labelsRight],
            datasets: [
              {
                label: "Traffic",
                data: data, // Menggunakan data yang telah ditambahkan
                backgroundColor: backgroundColor,
              },
            ],
          }}
          options={{
            cutoutPercentage: 50, // Mengatur persentase pemotongan untuk memperbesar lingkaran dalam
            plugins: {
              legend: {
                display: false,  // Menonaktifkan legend
              },
              tooltip: {
                enabled: false,  // Menonaktifkan tooltip
              },
            },
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">Budget</span>
        </div>
      </div>
      <div className="ml-6 mt-8">
        <h3 className="text-2xl font-semibold">Rp840.000</h3>
        <div className="mt-2">
          <div className="grid grid-cols-2 gap-x-2 mr-4 border-none"> {/* Tambahkan kelas border-none di sini */}
            <div className="flex flex-col border-none"> {/* Tambahkan kelas border-none di sini */}
              {labelsLeft.map((label, index) => (
                <div key={index} className="flex items-center mt-1">
                  <span
                    className="w-3 h-3 mr-2 inline-block"
                    style={{ backgroundColor: backgroundColor[index] }}
                  ></span>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-none"> {/* Tambahkan kelas border-none di sini */}
              {labelsRight.map((label, index) => (
                <div key={index} className="flex items-center mt-1">
                  <span
                    className="w-3 h-3 mr-2 inline-block"
                    style={{ backgroundColor: backgroundColor[index + labelsLeft.length] }}
                  ></span>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
