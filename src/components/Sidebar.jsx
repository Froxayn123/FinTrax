import LogoNavbar from "../assets/LogoNavbar";
import { navDashDatas } from "../data/NavDashDatas";
import NavDash from "./NavDash";
import Iconlogout from "../assets/iconlogout";

const Sidebar = () => {
  return (
    <>
      <div className="fixed h-screen p-[48px] flex flex-col justify-start items-center bg-[#0D243D] space-y-[64px] z-50">
        <LogoNavbar to="/home" />
        <div className="space-y-[48px]">
          <div className="flex flex-col justify-center items-center space-y-[16px]">
            <img src="/Avatar2.png" alt="" className="w-24 h-24 rounded-full" />
            <h1 className="text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">Silvi Putri</h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-[16px]">
            {navDashDatas.map((data, i) => {
              return <NavDash key={i} title={data.title} icon={data.icon} to={data.to} />;
            })}
          </div>
        </div>
        <button className="text-white group w-36 [background:var(--Blue-Hover-100,#0D243D)] transition duration-300 ease-in-out py-2 rounded-lg flex items-center justify-center space-x-2 outline outline-white hover:bg-white hover:text-[#001833]">
          <Iconlogout />
          <span className="text-sm font-bold ">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
