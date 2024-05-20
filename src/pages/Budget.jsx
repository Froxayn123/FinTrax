import ContentBudget from "../components/ContentBudget";
import IconOverview from "../assets/iconoverview";
import Icontransaksi from "../assets/icontransaksi";
import Iconplanning from "../assets/iconplanning";
import Iconnotif from "../assets/iconnotif";
import Iconsettings from "../assets/iconsetting";
import Iconlogout from "../assets/iconlogout";
import { Link } from "react-router-dom";

const Budget = () => {
  return (
    <div className="flex">
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
              <Link to="/Overview" className="text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
                <IconOverview />
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
              <Link to="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out bg-white text-[#001833]">
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#001833">
                  <path d="M22.4062 15.9844C22.4062 20.625 18.6562 24.375 14.0156 24.375C9.375 24.375 5.625 20.625 5.625 15.9844C5.625 11.3437 9.375 7.59375 14.0156 7.59375V15.9844H22.4062Z" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24.375 14.0156C24.375 9.375 20.625 5.625 15.9844 5.625V14.0156H24.375Z" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14.0156 15.9844L8.0625 21.9375" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10.125 19.875L14.5313 24.3281" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12.2344 17.7656L17.8125 23.3906" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20.1562 21.5625L15.9375 17.3437L14.625 16.0312" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21.6563 19.4062L18.3281 16.0312" strokeWidth="2" strokeLinecap="round" />
                </svg>
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
        <ContentBudget />
      </div>
    </div>
  );
};

export default Budget;
