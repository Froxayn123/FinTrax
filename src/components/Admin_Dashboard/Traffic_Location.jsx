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

  const data = [52.1, 22.8, 13.9, 11.2]; 

  return (
    <div className="flex flex-col lg:flex-row p-6 bg-dark rounded-lg"> 
      <div className="flex-shrink-0">
        <h2 className="text-start text-lg font-semibold mb-4 lg:mb-16 ml-4 text-white">Traffic by Location</h2>
        <div className="w-full lg:w-80 h-60 lg:mx-auto"> 
          <TEChart
            type="doughnut"
            data={{
              labels: labelsLeft,
              datasets: [
                {
                  label: "Traffic",
                  data: data,
                  backgroundColor: backgroundColor,
                  borderColor: "#000", 
                  borderWidth: 1, 
                },
              ],
            }}
            options={{
              cutout: '70%', 
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  enabled: false,  
                },
              },
              maintainAspectRatio: false, 
            }}
          />
        </div>
      </div>
      <div className="lg:ml-10 lg:mt-32 mt-10 text-white"> 
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
            <div className="ml-8 lg:ml-40 text-lg">22.8%</div> 
          </li>
          <li className="mb-6 flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(174, 233, 189, 1)" }}></span>
              Singapore
            </div>
            <div className="ml-8 lg:ml-40 text-lg">13.9%</div> 
          </li>
          <li className="flex items-center justify-between w-full font-semibold">
            <div className="flex items-center text-lg">
              <span className="w-4 h-4 mr-2 inline-block rounded-full" style={{ backgroundColor: "rgba(237, 242, 247, 1)" }}></span>
              Other
            </div>
            <div className="ml-8 lg:ml-40 text-lg">11.2%</div> 
          </li>
        </ul>
      </div>
    </div>
  );
}
