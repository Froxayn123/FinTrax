import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPageLayout from "@/components/layout/DashboardPageLayout";
import CardTransparent from "@/components/ui/CardTransparent";
import Button from "@/components/ui/Button";
import BudgetChart from "@/components/ui/Overview/BudgetChart";
import Summary from "@/components/ui/Overview/Summary";
import Calendar from "@/components/ui/Overview/Calendar";

const Overview = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (user.exp * 1000 < currentDate.getTime()) {
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

  return (
    <DashboardPageLayout profile={user} onClick={() => handleLogout()}>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center text-white">
          <h2 className="text-2xl">
            Balance: <span className="text-3xl font-semibold">{user?.balance ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(user.balance) : "Loading..."}</span>
          </h2>
          <h2 className="text-3xl font-semibold">Hello, {user?.username ? user.username : "Loading..."}👋</h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <CardTransparent>
            <div>
              <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl bg-gradient-to-b from-purple-700 to-purple-600 p-3">⁝</button>
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold text-white">Income this Month</h3>
                <p className="text-2xl mt-1 text-white">Rp2.800.000</p>
                <img src="./Income-bar.png" alt="" className="" />
                <p className="text-green-500 text-sm mt-0">↑ +2,12%</p>
              </div>
            </div>
          </CardTransparent>
          <CardTransparent>
            <div>
              <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl bg-gradient-to-b from-purple-700 to-purple-600 p-3">⁝</button>
              <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold text-white">Expense this Month</h3>
                <p className="text-2xl mt-1 text-white">Rp840.000</p>
                <img src="./Expense-bar.png" alt="" className="" />
                <p className="text-red-500 text-sm mt-0">↓ -2,53%</p>
              </div>
            </div>
          </CardTransparent>
          <CardTransparent className="col-span-2">
            <div className="flex justify-between items-center space-x-4">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">Keep saving, stay wealthy, and smart!</h3>
                <h3 className="text-sm font-semibold mb-4">Saving now will not make you poor</h3>
                <Button title="Saving Now" />
              </div>
              <img src="./KeepSaving.png" alt="" className="w-24 h-24 lg:w-36 lg:h-36 object-contain mr-0 lg:mr-10 mt-4 lg:mt-0" />
            </div>
          </CardTransparent>
          <CardTransparent className="col-span-2">
            <div className="flex flex-col w-full">
              <BudgetChart userData />
            </div>
          </CardTransparent>
          <CardTransparent className="col-span-2">
            <div className="flex flex-col w-full text-white">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl lg:text-3xl font-semibold mr-1">History Transaction</h3>
                <button className="ml-auto flex justify-center text-white items-center gap-2.5 border border-gray-300 px-2.5 py-1 rounded-3xl hover:bg-white hover:text-black">See More</button>
              </div>
              <ul>
                <li className="flex justify-between items-center my-1">
                  <div className="flex items-center">
                    <img src="/FoodBeverages.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm">Food & Beverages</div>
                      <div className="text-sm">Mie Gacoan</div>
                    </div>
                  </div>
                  <div className="text-sm">7/8/2017</div>
                  <div className="text-sm mr-4 text-rose-600">-Rp25.000</div>
                </li>
                <li className="flex justify-between items-center my-1">
                  <div className="flex items-center">
                    <img src="/Education.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm">Education</div>
                      <div className="text-sm">Mie Gacoan</div>
                    </div>
                  </div>
                  <div className="text-sm">7/6/2017</div>
                  <div className="text-sm mr-4 text-rose-600">-Rp100.000</div>
                </li>
                <li className="flex justify-between items-center my-1">
                  <div className="flex items-center">
                    <img src="/Transportation.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm">Transportation</div>
                      <div className="text-sm">Mie Gacoan</div>
                    </div>
                  </div>
                  <div className="text-sm">7/1/2017</div>
                  <div className="text-sm mr-4 text-rose-600">-Rp90.000</div>
                </li>
              </ul>
            </div>
          </CardTransparent>
          <CardTransparent className="col-span-2">
            <div className="flex flex-col w-full">
              <Summary userData />
            </div>
          </CardTransparent>
          <CardTransparent className="col-span-2">
            <div className="flex flex-col w-full">
              <Calendar userData />
            </div>
          </CardTransparent>
        </div>
      </div>
    </DashboardPageLayout>
  );
};

export default Overview;
