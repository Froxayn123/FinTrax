import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Card from './Card';

const InvestmentSimulationCard = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyInvestment, setMonthlyInvestment] = useState('');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Investment',
        data: [initialInvestment, 10000, 20000, 30000, 40000, 50000, 60000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Regular Savings',
        data: [0, 1000, 2000, 3000, 4000, 5000, 6000],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <Card
      title="Investment Simulation"
      content={
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center mb-10 w-full">
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
  );
};

export default InvestmentSimulationCard;
