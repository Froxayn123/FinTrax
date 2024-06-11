import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoNavbar from "../assets/LogoNavbar";
import { navDashDatas } from "../data/NavDashDatas";
import NavDash from "./NavDash";
import Iconlogout from "../assets/iconlogout";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_API}/logout`, {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      <div className={`fixed h-screen p-[48px] flex flex-col justify-start items-center bg-[#0D243D] space-y-[64px] z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
        <LogoNavbar to="/home" />
        <div className="space-y-[48px]">
          <div className="flex flex-col justify-center items-center space-y-[16px]">
            <img src="/Avatar2.png" alt="" className="w-24 h-24 rounded-full" />
            <h1 className="text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">Silvi Putri</h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-[16px]">
            {navDashDatas.map((data, i) => {
              return <NavDash key={i} title={data.title} icon={data.icon} iconSelected={data.iconSelected} to={data.to} />;
            })}
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="text-white group w-36 [background:var(--Blue-Hover-100,#0D243D)] transition duration-300 ease-in-out py-2 rounded-lg flex items-center justify-center space-x-2 outline outline-white hover:bg-white hover:text-[#001833]"
        >
          <Iconlogout />
          <span className="text-[22px] font-medium font-['Roboto']">Logout</span>
        </button>
      </div>

      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 md:hidden"></div>}
    </>
  );
};

export default Sidebar;
