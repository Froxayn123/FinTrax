import BudgetChart from "../components/Overview/BudgetChart";
import Summary from "../components/Overview/Summary";
import Calendar from "../components/Overview/Calendar";
import Icontransaksi from "../assets/icontransaksi";
import Iconbudget from "../assets/iconbudget";
import Iconplanning from "../assets/iconplanning";
import Iconnotif from "../assets/iconnotif";
import Iconsettings from "../assets/iconsetting";
import Iconlogout from "../assets/iconlogout";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <>
      <div className="min-h-screen [background:var(--Blue-100,#001833)] text-white font-sans flex">
        <aside className="fixed w-60 h-screen flex flex-col justify-between items-start [background:var(--Blue-Hover-100,#0D243D)]">
          <div className="flex items-center justify-center mb-4 mt-5 ml-4">
            <Link to="/Home">
              <img src="/Logo-dasboard.png" alt="Profile" className="ms-auto" />
            </Link>
          </div>

          <div className="flex flex-col m-auto mb-2">
            <div className="mt-4 flex flex-col items-center">
              <img src="/Avatar.png" alt="ProfilDashboard.jsx" className="w-24 h-24 rounded-full" />
              <h3 className="text-white font-bold mt-4 text-xl">Username</h3>
            </div>
          </div>

          <nav className="mt-4 flex-1 w-36 ml-10">
            <ul className="space-y-3">
              <li>
                <Link to="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out bg-white text-[#001833]">
                  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300 group-hover:stroke-[#001833]" stroke="#001833">
                    <path d="M16.25 15C16.25 14.3096 16.8096 13.75 17.5 13.75H23.75C24.4404 13.75 25 14.3096 25 15V23.75C25 24.4404 24.4404 25 23.75 25H17.5C16.8096 25 16.25 24.4404 16.25 23.75V15Z" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 6.25C5 5.55965 5.55965 5 6.25 5H11.25C11.9404 5 12.5 5.55965 12.5 6.25V15C12.5 15.6904 11.9404 16.25 11.25 16.25H6.25C5.55965 16.25 5 15.6904 5 15V6.25Z" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 21.25C5 20.5596 5.55965 20 6.25 20H11.25C11.9404 20 12.5 20.5596 12.5 21.25V23.75C12.5 24.4404 11.9404 25 11.25 25H6.25C5.55965 25 5 24.4404 5 23.75V21.25Z" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16.25 6.25C16.25 5.55965 16.8096 5 17.5 5H23.75C24.4404 5 25 5.55965 25 6.25V8.75C25 9.44035 24.4404 10 23.75 10H17.5C16.8096 10 16.25 9.44035 16.25 8.75V6.25Z" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className=" text-sm font-bold">Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/Transaction" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                  <Icontransaksi />
                  <span className="text-sm font-bold">Transaction</span>
                </Link>
              </li>
              <li>
                <Link to="/Budget" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                  <Iconbudget />
                  <span className="text-sm font-bold ">Budget</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                  <Iconplanning />
                  <span className="text-sm font-bold ">Planning</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                  <Iconnotif />
                  <span className="text-sm font-bold ">Notification</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                  <Iconsettings />
                  <span className="text-sm font-bold ">Setting</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="text-white group mb-5 w-36 [background:var(--Blue-Hover-100,#0D243D)] transition duration-300 ease-in-out py-2 rounded-lg flex items-center justify-center ml-10 space-x-2 outline outline-white hover:bg-white hover:text-[#001833] ">
            <Iconlogout />
            <span className="text-sm font-bold ">Logout</span>
          </button>
        </aside>
        <main className="flex-1 pl-7 pr-7 ml-60 mt-12">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold">Balance:</h2>
              <h2 className="text-2xl font-semibold ml-2">RP1.250.000</h2>
            </div>
            <span className="text-2xl font-semibold">Hello, Silvi Putri!👋</span>
          </header>

          <section className="grid grid-cols-4 gap-4">
            <div className="p-5 relative [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl [background:var(--Font,linear-gradient(180deg,#8A00D4_0%,#8F19BD_100%))] p-[15px]">
                ⁝
              </button>
              <h3 className="text-lg font-semibold text-white">Income this Month</h3>
              <p className="text-2xl mt-1 text-white">Rp2.800.000</p>
              <img src="./Income-bar.png" alt="" className="" />
              <p className="text-green-500 text-sm mt-0">↑ +2,12%</p>
            </div>

            <div className="p-5 relative [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl [background:var(--Font,linear-gradient(180deg,#8A00D4_0%,#8F19BD_100%))] p-[15px]">
                ⁝
              </button>
              <h3 className="text-lg font-semibold text-white">Expense this Month</h3>
              <p className="text-2xl mt-1 text-white">Rp840.000</p>
              <img src="./Expense-bar.png" alt="" className="" />
              <p className="text-red-500 text-sm mt-0">↓ -2,53%</p>
            </div>

            <div className="col-span-2 p-4 relative flex items-center justify-between w-full [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <div className="text-left flex-1">
                <h3 className="text-3xl font-semibold mb-2">Keep saving, stay wealthy, and smart!</h3>
                <h3 className="text-sm font-semibold mb-2">Saving now will not make you poor</h3>
                <button className="mt-2 [background:linear-gradient(90deg,#4E2DD1_-82.02%,#8C3FD9_50.56%)] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.30)] rounded-lg text-white py-1 px-2 text-sm hover:[background:var(--gradient2,linear-gradient(90deg,#4E2DD1_0%,#8C3FD9_93.45%))]">
                  Saving Now
                </button>
              </div>
              <img src="./KeepSaving.png" alt="" className="w-36 h-36 object-contain mr-10" />
            </div>
          </section>

          <section className="mt-4 grid grid-cols-2 gap-4">
            <BudgetChart />

            <div className="p-4 [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-semibold mr-1">History Transaction</h3>
                <button className="ml-auto flex justify-center text-white items-center gap-2.5 border border-[color:var(--BG,#ECEFF5)] px-2.5 py-1 rounded-[20px] border-solid  hover:bg-white hover:text-black">See More</button>
              </div>
              <ul>
                <li className="flex justify-between items-center my-1">
                  <div className="flex items-center">
                    <img src="/F&B.png" alt="" className="w-8 h-9 mr-5 mb-4" />
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
          </section>

          <section className="mt-4 grid grid-cols-2 gap-4 mb-1">
            <div className="p-2 [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <Summary />
            </div>
            <div className="p-6 [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
              <Calendar />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Overview;
