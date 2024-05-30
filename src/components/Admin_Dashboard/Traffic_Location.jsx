import { TEChart } from "tw-elements-react";

export default function Traffic_Location() {
  const labelsLeft = [
    "Indonesia",
    "Malaysia",
    "Singapore",
    "Other",
  ];

  const backgroundColor = [
    "rgba(173, 222, 245, 1)", 
    "rgba(153, 202, 255, 1)", 
    "rgba(174, 233, 189, 1)", 
    "rgba(237, 242, 247, 1)",
  ];

  const data = [52.1, 22.8, 13.9, 11.2]; // Persentase sesuai data pada gambar

  return (
    <div className="flex flex-col lg:flex-row p-6 bg-dark rounded-lg"> {/* Gunakan flex-col untuk kolom vertikal di layar kecil */}
      <div>
        <h2 className="text-start text-lg font-semibold mb-4 lg:mb-20 ml-4 text-white">Traffic by Location</h2>
        <div className="w-full lg:w-80 h-60 lg:mx-auto"> {/* Gunakan unit persentase dan mx-auto untuk sentralisasi di layar kecil */}
          <TEChart
            type="doughnut"
            data={{
              labels: labelsLeft,
              datasets: [
                {
                  label: "Traffic",
                  data: data,
                  backgroundColor: backgroundColor,
                  borderColor: "#000", // Mengatur warna border
                  borderWidth: 1, // Mengatur ketebalan border
                },
              ],
            }}
            options={{
              cutout: '70%', // Mengatur persentase pemotongan untuk memperbesar lingkaran dalam
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  enabled: false,  // Menonaktifkan tooltip
                },
              },
              maintainAspectRatio: false, // Agar chart mengikuti ukuran yang diberikan
            }}
          />
        </div>
      </div>
      <div className="lg:ml-10 lg:mt-32 text-white "> {/* Gunakan margin atas untuk layar kecil */}
        <ul>
          <li className="mb-6 flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(173, 222, 245, 1)" }}></span>
              Indonesia
            </div>
            <div className="ml-8 lg:ml-40 text-lg">52.1%</div> 
          </li>
          <li className="mb-6 flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(153, 202, 255, 1)" }}></span>
              Malaysia
            </div>
            <div className="ml-8 lg:ml-40 text-lg">22.8%</div> {/* Gunakan margin lebih kecil di layar kecil */}
          </li>
          <li className="mb-6 flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(174, 233, 189, 1)" }}></span>
              Singapore
            </div>
            <div className="ml-8 lg:ml-40 text-lg">13.9%</div> {/* Gunakan margin lebih kecil di layar kecil */}
          </li>
          <li className="flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(237, 242, 247, 1)" }}></span>
              Other
            </div>
            <div className="ml-8 lg:ml-40 text-lg">11.2%</div> {/* Gunakan margin lebih kecil di layar kecil */}
          </li>
        </ul>
      </div>
    </div>
  );
}
