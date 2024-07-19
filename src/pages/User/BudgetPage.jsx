import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "chart.js/auto";
import DashboardPageLayout from "@/components/layout/DashboardPageLayout";
import Dropdown from "../../components/ui/Dropdown";
import CardTransparent from "@/components/ui/CardTransparent";
import PlusIcon from "@/components/svg/PlusIcon";
import { budgetCardData } from "../../data/BudgetData";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BudgetPage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [income, setIncome] = useState();
  const [budgetingRules, setbudgetingRules] = useState();
  const navigate = useNavigate();
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (user.exp * 1100 < currentDate.getTime()) {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setUser(decoded);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded);
    } catch (error) {
      console.error("Failed to fetch access token:", error.response ? error.response.data : error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_API}/logout`);
      setToken(null);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.response ? error.response.data : error.message);
    }
  };

  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "#E0E0E0",
        formatter: (value, context) => {
          let sum = 0;
          const dataArr = context.chart.data.datasets[0].data;
          dataArr.forEach((data) => {
            sum += data;
          });
          const percentage = ((value * 110) / sum).toFixed(2) + "%";
          return percentage;
        },
        font: {
          size: 6,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const dataNeeds = {
    labels: ["Needs"],
    datasets: [
      {
        label: ["Needs"],
        data: [1, 1],
        backgroundColor: ["#FF6826", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  const dataWants = {
    labels: ["Wants"],
    datasets: [
      {
        label: "Wants",
        data: [30, 70],
        backgroundColor: ["#1DC624", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  const dataSavings = {
    labels: ["Savings"],
    datasets: [
      {
        label: "Savings",
        data: [20, 80],
        backgroundColor: ["#9E9E9E", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  return (
    <DashboardPageLayout profile={user} onClick={() => handleLogout()}>
      <div className="flex flex-col space-y-20">
        <div className="w-full flex justify-between items-center">
          <div className="w-1/3 space-y-4">
            <h1 className="text-white text-3xl font-bold">Money Allocation</h1>
            <div className="flex justify-start items-center space-x-3">
              <div className="w-1/2">
                <label className="block text-white mb-2">Income</label>
                <input
                  type="number"
                  name="amount"
                  value={user?.balance ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(user.balance) : "Loading..."}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="Enter the transaction amount"
                  className="w-full h-[50px] p-4 bg-transparent text-white border border-white rounded-lg"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-white mb-2">Income</label>
                <Dropdown onChange={(e) => setbudgetingRules(e)} options={""} placeholder="50/30/20" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="w-[110px]">
              <Doughnut data={dataNeeds} options={options} plugins={[ChartDataLabels]} />
            </div>
            <div className="w-[110px]">
              <Doughnut data={dataWants} options={options} plugins={[ChartDataLabels]} />
            </div>
            <div className="w-[110px]">
              <Doughnut data={dataSavings} options={options} plugins={[ChartDataLabels]} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {budgetCardData.map((data) => {
            return (
              <CardTransparent key={data.id}>
                <div className="absolute end-4 border border-white rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[14.35px]">{PlusIcon("w-7")}</div>
                <img src={data.icon} alt="" className="w-[50px]" />
                <h2 className="text-white text-xl font-medium mt-2">{data.title}</h2>
                <h3 className="text-white text-lg mt-1">{data.money}</h3>
              </CardTransparent>
            );
          })}
        </div>
      </div>
    </DashboardPageLayout>
  );
};

export default BudgetPage;
