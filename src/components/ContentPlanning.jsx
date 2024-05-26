import { useState } from "react";
import { Line } from "react-chartjs-2";
import Card from "./Card";
import Goals from "./Goals";
import PopupGoals from "./PopupGoals";
import Insight from "./Insight";

const ContentPlanning = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [percentageForSaving, setPercentageForSaving] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [insight, setInsight] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleApplyClick = () => {
    if (activeButton) {
      setShowPopup(true);
    } else {
      alert("Please select a goal before applying.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseInsight = () => {
    setShowInsight(false);
  };

  const handleGenerateClick = () => {
    if (monthlyIncome && percentageForSaving && targetAmount) {
      const monthlySaving = (monthlyIncome * (percentageForSaving / 100)).toFixed(2);
      const monthsNeeded = Math.ceil(targetAmount / monthlySaving);

      const savingAccountOptions = <div>Digital bank saving with interest rate 5% p.a - 6,5% p.a (Bank Jago / Bank Panin)</div>;

      const expenseOptimization = (
        <div>To ensure you can save Rp{monthlySaving} each month, we suggest reviewing your current expenses and identifying areas where you can cut back. Consider reducing discretionary spending, such as dining out or entertainment.</div>
      );

      const additionalIncome = <div>To reach your goal faster or to have more flexibility, consider additional income sources such as freelance work, part-time jobs, or selling unused items.</div>;

      const investmentOptions = (
        <div>
          <ul className="list-disc">
            <li>If you are open to slightly higher risk, consider investing a portion of your savings in mutual funds or bonds. These can potentially offer higher returns compared to a regular savings account.</li>
            <li>
              Low-Risk Investment Options:
              <ul className="list-disc ml-6">
                <li>Mutual Fund A: Average return 4-5%</li>
                <li>Bond B: Fixed return 3%</li>
              </ul>
            </li>
          </ul>
        </div>
      );

      const insightMessage = (
        <div>
          <div className="text-lg">
            You need to save Rp{monthlySaving} every month for {monthsNeeded} months to reach your goal.
          </div>
          <p>Below are suggestions that we can give so that you can achieve your goals more quickly</p>
          <div>
            <h3 className="text-lg mt-4">Saving Account Options</h3>
            <ul className="list-disc ml-6">
              <li>{savingAccountOptions}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mt-4">Expense Review and Optimization</h3>
            <ul className="list-disc ml-6">
              <li>{expenseOptimization}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mt-4">Additional Income Opportunities</h3>
            <ul className="list-disc ml-6">
              <li>{additionalIncome}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mt-4">Investment Options</h3>
            <ul className="ml-6">
              <li>{investmentOptions}</li>
            </ul>
          </div>
        </div>
      );

      setInsight(insightMessage);
      setShowPopup(false);
      setShowInsight(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const goals = [
    { name: "Wedding", img: "GWedding.png" },
    { name: "Education", img: "GEducation.png" },
    { name: "Emergency", img: "GEmergency.png" },
    { name: "Retirement", img: "GRetirement.png" },
    { name: "Business", img: "GBussiness.png" },
    { name: "Vehicles", img: "GVehicles.png" },
    { name: "House", img: "GHouse.png" },
    { name: "Gadget", img: "GGadget.png" },
    { name: "Umrah", img: "GUmrah.png" },
    { name: "Holidays", img: "GHolidays.png" },
    { name: "Fashion", img: "GFashion.png" },
    { name: "Others", img: "GOthers.png" },
  ];

  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyInvestment, setMonthlyInvestment] = useState("");

  const labels = ["0th", "5th", "10th", "15th", "20th", "25th"];
  const investmentData = [initialInvestment, 10000, 20000, 30000, 40000, 50000];
  const savingsData = [0, 1000, 2000, 3000, 4000, 5000];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Investment",
        data: investmentData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Regular Savings",
        data: savingsData,
        fill: false,
        backgroundColor: "rgba(153,102,255,0.6)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <Card title="Goals" content={<Goals goals={goals} activeButton={activeButton} handleButtonClick={handleButtonClick} handleApplyClick={handleApplyClick} />} />
        <Card
          title="Know your risk profile"
          content={
            <div className="flex flex-col items-center justify-center">
              <img src="/Know your risk profile.png" alt="Risk Profile" style={{ width: "150px", height: "auto" }} />
              <p className="text-center text-lg mb-2">
                Understanding your risk profile is crucial for making informed investment decisions. Your risk profile helps us tailor investment recommendations that align with your financial goals and comfort level.
              </p>
              <button className="w-full mt-28 p-2 text-2xl text-white rounded-xl shadow-md hover:bg-blue-600" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }}>
                Learn More
              </button>
            </div>
          }
        />

        <Card
          title="Systematic Investment Plan (SIP)"
          content={
            <div className="flex flex-col items-center justify-center">
              <div className="mb-5 w-full">
                <label htmlFor="investmentValue" className="text-xl font-semibold mb-2 block">
                  Investment Value
                </label>
                <input type="number" id="investmentValue" placeholder="Ex: Rp5.000.000" className="bg-transparent border border-gray-300 rounded-lg p-2 w-full" />
              </div>
              <div className="text-xl font-semibold mb-5 mr-auto">
                <label className="text-xl font-semibold mb-2 block">Frequency:</label>
                <button className="frequency-button border border-white text-white bg-transparent rounded-full p-2 px-4 mr-2 hover:bg-blue-500 hover:border-blue-500">Day</button>
                <button className="frequency-button border border-white text-white bg-transparent rounded-full p-2 px-4 mr-2 hover:bg-blue-500 hover:border-blue-500">Weekly</button>
                <button className="frequency-button border border-white text-white bg-transparent rounded-full p-2 px-4 mr-2 hover:bg-blue-500 hover:border-blue-500">Monthly</button>
              </div>
              <div className="flex justify-center mb-10 w-full">
                <div className="w-full mr-4">
                  <label htmlFor="everyDate" className="text-xl font-semibold mb-2 block">
                    Every Date:
                  </label>
                  <select id="everyDate" className="border border-white bg-transparent rounded-lg p-2 w-full">
                    <option value="1" className="text-black">
                      1st
                    </option>
                    <option value="2" className="text-black">
                      2nd
                    </option>
                    <option value="3" className="text-black">
                      3rd
                    </option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="until" className="text-xl font-semibold mb-2 block">
                    Until:
                  </label>
                  <select id="until" className="border border-white bg-transparent rounded-lg p-2 w-full">
                    <option value="date" className="text-black">
                      Forever
                    </option>
                    <option value="period" className="text-black">
                      Period
                    </option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-14 p-2 text-2xl text-white rounded-xl shadow-md hover:bg-blue-600" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }}>
                Activate Reminder
              </button>
            </div>
          }
        />

        <Card
          title="Investment Simulation"
          content={
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center mb-5 w-full">
                <div className="mb-5 mr-2 w-full">
                  <label htmlFor="initialInvestment" className="text-xl font-semibold mb-2 block">
                    Initial Investment
                  </label>
                  <input
                    type="number"
                    id="initialInvestment"
                    placeholder="Ex: Rp5.000.000"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                    className="bg-transparent border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-5 ml-2 w-full">
                  <label htmlFor="monthlyInvestment" className="text-xl font-semibold mb-2 block">
                    Monthly Investment
                  </label>
                  <input
                    type="number"
                    id="monthlyInvestment"
                    placeholder="Ex: Rp5.000.000"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    className="bg-transparent border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <Line data={data} />
              </div>
            </div>
          }
        />
      </div>

      {showPopup && (
        <PopupGoals
          goals={goals}
          activeButton={activeButton}
          monthlyIncome={monthlyIncome}
          setMonthlyIncome={setMonthlyIncome}
          percentageForSaving={percentageForSaving}
          setPercentageForSaving={setPercentageForSaving}
          targetAmount={targetAmount}
          setTargetAmount={setTargetAmount}
          handleClosePopup={handleClosePopup}
          handleGenerateClick={handleGenerateClick}
        />
      )}

      {showInsight && <Insight insight={insight} handleCloseInsight={handleCloseInsight} />}
    </div>
  );
};

export default ContentPlanning;
