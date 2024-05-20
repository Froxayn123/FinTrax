import ContentTransaction from "../components/ContentTransaction";
import IconOverview from "../assets/iconoverview";
import Iconbudget from "../assets/iconbudget";
import Iconplanning from "../assets/iconplanning";
import Iconnotif from "../assets/iconnotif";
import Iconsettings from "../assets/iconsetting";
import Iconlogout from "../assets/iconlogout";
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <div className="flex">
      <aside className="fixed w-60 h-screen flex flex-col justify-between items-start [background:var(--Blue-Hover-100,#0D243D)]">
        <div className="flex items-center justify-center mb-4 mt-5 ml-4">
          <img src="/Logo-dasboard.png" alt="Profile" className="ms-auto" />
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
              <Link to="/Overview" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                <IconOverview />
                <span className=" text-sm font-bold">Overview</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out bg-white text-[#001833]">
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#001833">
                  <path d="M19.2188 8.90625L21.0469 8.95313V12.7969" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5.625 12.7969H21.1406H24.375V24.375H7.26562C6.375 24.375 5.625 23.625 5.625 22.7344V10.5938C5.625 9.70313 6.375 8.95313 7.26562 8.95313L9.84375 8.90625" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21.0469 19.9687H24.375V16.6406H21.0469C20.1563 16.6406 19.4062 17.3906 19.4062 18.2813C19.4062 19.2188 20.1563 19.9687 21.0469 19.9687Z" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9.84375 12.7969V7.03125C9.84375 6.23438 10.5 5.625 11.25 5.625H17.8125C18.6094 5.625 19.2188 6.23438 19.2188 7.03125V12.7969" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11.7188 5.625V12.7969" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14.5312 5.625V12.7969" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17.3438 7.5V8.90625" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-bold">Transaction</span>
              </Link>
            </li>
            <li>
              <Link to="/budget" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
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
      <div className="flex-grow">
        <ContentTransaction />
      </div>
    </div>
  );
};

export default Transaction;
