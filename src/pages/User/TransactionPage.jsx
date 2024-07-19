import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPageLayout from "@/components/layout/DashboardPageLayout";
import Button from "@/components/ui/Button";
import CardTransparent from "@/components/ui/CardTransparent";
import ButtonTransparent from "@/components/ui/ButtonTransparent";
import PlusIcon from "@/components/svg/PlusIcon";
import UploadIcon from "@/components/svg/UploadIcon";
import CalendarIcon from "@/components/svg/CalendarIcon";
import NavList from "@/components/NavList";
import SearchIcon from "@/components/svg/SearchIcon";
import { navigations } from "@/data/Navigations";
import UpDownIcon from "@/components/svg/UpDownIcon";
import Modal from "@/components/ui/Modal";
import { categories } from "@/data/Categories";
import Dropdown from "../../components/ui/Dropdown";
import RadioButtonTransparent from "../../components/ui/RadioButtonTransparent";

const TransactionPage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userTransactions, setUserTransactions] = useState([]);
  const [newTransactionType, setNewTransactionType] = useState("income");
  const [newTransactionCategoryName, setNewTransactionCategoryName] = useState("");
  const [newTransactionAmount, setNewTransactionAmount] = useState();
  const [newTransactionDetail, setNewTransactionDetail] = useState("");

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
    const getAllTransactions = async () => {
      try {
        const response = await axiosJWT.get(`${import.meta.env.VITE_APP_BASE_API}/transactions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserTransactions(response.data.payload.datas);
      } catch (error) {
        console.error("Cannot get transactions", error.response ? error.response.data : error.message);
      }
    };
    refreshToken();
    getAllTransactions();
  }, [token]);

  const addNewTransaction = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosJWT.post(
        `${import.meta.env.VITE_APP_BASE_API}/transaction/add`,
        {
          type: newTransactionType,
          categoryName: newTransactionCategoryName,
          amount: newTransactionAmount,
          detail: newTransactionDetail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsModalOpen(false);

      console.log(response.data.message);
    } catch (error) {
      console.error("Cannot add transaction", error.response ? error.response.data : error.message);
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
      <CardTransparent>
        <div className="p-3 w-full space-y-10">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center space-x-4">
              <h1 className="text-white text-3xl font-bold mb-4 lg:mb-0 lg:mr-4">Transactions</h1>
              <ButtonTransparent svg={CalendarIcon("stroke-white")} type="button" title="From date" onClick={() => {}} />
              <ButtonTransparent svg={CalendarIcon("stroke-white")} type="button" title="End date" onClick={() => {}} />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Button
                svg={PlusIcon("stroke-white w-5")}
                type="button"
                title="Add Transaction"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              />
              <Button svg={UploadIcon("stroke-white")} type="button" title="Export" onClick={() => {}} />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <NavList navigations={navigations[1].datas} />
            <ButtonTransparent svg={SearchIcon("stroke-white")} type="button" title="Search" onClick={() => {}} />
          </div>
          <div className="flex flex-col space-y-2">
            <table className="table-auto w-full text-white border-collapse">
              <thead>
                <tr>
                  <th className="border-b font-semibold border-white py-2 text-left">
                    <span className="flex items-center">
                      Name <UpDownIcon />
                    </span>
                  </th>
                  <th className="border-b font-semibold border-white py-2 text-left">
                    <span className="flex items-center">
                      Date <UpDownIcon />
                    </span>
                  </th>
                  <th className="border-b font-semibold border-white py-2 text-left">Amount</th>
                  <th className="border-b font-semibold border-white py-2 text-right">Category</th>
                </tr>
              </thead>
              <tbody>
                {userTransactions.map((transaction) => (
                  <tr key={`${transaction.category_name}-${transaction.created_at}`}>
                    <td className="py-2">
                      <div className="flex items-center font-semibold space-x-2">
                        <img src={transaction.icon} alt={transaction.category_name} className="w-[50px]" />
                        <div>
                          <div>{transaction.category_name}</div>
                          <div className="text-sm text-gray-400">{transaction.detail}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-left py-2">{new Date(transaction.created_at).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</td>
                    {transaction.type == "income" ? (
                      <td className="text-left py-2 text-green-500">{`+ ` + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transaction.amount)}</td>
                    ) : (
                      <td className="text-left py-2 text-red-500">{`- ` + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transaction.amount)}</td>
                    )}
                    <td className="text-right py-2 capitalize">{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardTransparent>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4 text-center border-b border-[#797979]">Record Your Income and Expenses</h2>
        <form onSubmit={addNewTransaction} className="space-y-8">
          <div>
            <label className="block text-white mb-2">Select Type of Transaction</label>
            <div className="flex space-x-2">
              <RadioButtonTransparent name="type" value="income" label="Add Income" checked={newTransactionType === "income"} onChange={(e) => setNewTransactionType(e.target.value)} />
              <RadioButtonTransparent name="type" value="expenses" label="Add Expenses" checked={newTransactionType === "expenses"} onChange={(e) => setNewTransactionType(e.target.value)} />
            </div>
          </div>
          <Dropdown onChange={(e) => setNewTransactionCategoryName(e)} options={categories} placeholder="Select Category" />
          <div>
            <label className="block text-white mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={newTransactionAmount}
              onChange={(e) => setNewTransactionAmount(e.target.value)}
              placeholder="Enter the transaction amount"
              className="w-full h-[50px] p-4 bg-transparent text-white border border-white rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Transaction Detail</label>
            <input
              type="text"
              name="description"
              value={newTransactionDetail}
              onChange={(e) => setNewTransactionDetail(e.target.value)}
              placeholder="Ex.Buy shoes Nike "
              className="w-full h-[50px] p-4 bg-transparent text-white border border-white rounded-lg"
              required
            />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <ButtonTransparent type="button" title="Cancel" onClick={() => setIsModalOpen(false)} />
            <Button type="submit" title="Save" />
          </div>
        </form>
      </Modal>
    </DashboardPageLayout>
  );
};

export default TransactionPage;
