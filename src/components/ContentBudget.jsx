import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ContentBudget = () => {
  // Data untuk setiap kategori
  const dataSavings = {
    labels: ["Savings"],
    datasets: [
      {
        label: "Savings",
        data: [20, 80], // 20% Savings, 80% remaining
        backgroundColor: ["#FF6384", "#E0E0E0"],
        hoverBackgroundColor: ["#FF6384", "#E0E0E0"],
      },
    ],
  };

  const dataNeeds = {
    labels: ["Needs"],
    datasets: [
      {
        label: "Needs",
        data: [50, 50], // 50% Needs, 50% remaining
        backgroundColor: ["#36A2EB", "#E0E0E0"],
        hoverBackgroundColor: ["#36A2EB", "#E0E0E0"],
      },
    ],
  };

  const dataWants = {
    labels: ["Wants"],
    datasets: [
      {
        label: "Wants",
        data: [30, 70], // 30% Wants, 70% remaining
        backgroundColor: ["#FFCE56", "#E0E0E0"],
        hoverBackgroundColor: ["#FFCE56", "#E0E0E0"],
      },
    ],
  };

  // Opsi grafik untuk menampilkan persentase di tengah
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "#E0E0E0",
        formatter: (value, context) => {
          let sum = 0;
          let dataArr = context.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        font: {
          size: "6",
        },
      },
    },
    maintainAspectRatio: false,
  };

  // Mengatur ukuran grafik
  const chartSize = 100;

  return (
    <div className="p-4 ml-72 mt-12 mr-12 rounded-xl">
      <div className="flex justify-between">
        <div className="flex-auto">
          <h1 className="text-white text-3xl font-bold mr-4">Money Allocation</h1>
          <div className="flex">
            <div className="mt-4 mr-4">
              <label className="block text-white text-xl font-medium">Income</label>
              <input type="text" className="mt-2 p-2 rounded border border-gray-300 w-52" placeholder="Enter amount" />
            </div>

            <div className="mt-4">
              <label className="block text-white text-xl font-medium">Budgeting Rules</label>
              <select className="mt-2 p-2 rounded border border-gray-300 w-52">
                <option value="rule1">50/30/20</option>
                <option value="rule2">70/20/10</option>
                <option value="rule3">60/30/10</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col items-center mx-4">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataNeeds} options={options} plugins={[ChartDataLabels]} />
            </div>{" "}
            <h2 className="text-white text-xl font-medium text-center">Needs</h2>
            <h3 className="text-white text-lg text-center">Rp. 840K</h3>
          </div>
          <div className="flex flex-col items-center">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataWants} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium text-center">Wants</h2>
            <h3 className="text-white text-lg text-center">Rp. 560K</h3>{" "}
          </div>{" "}
          <div className="flex flex-col items-center">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataSavings} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium text-center">Savings</h2>
            <h3 className="text-white text-lg text-center">Rp. 1,4M</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBudget;
