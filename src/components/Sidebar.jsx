import PropTypes from "prop-types";
import LogoSidebar from "@/components/ui/LogoSidebar.jsx";
import { navDashDatas } from "@/data/NavDashDatas";
import NavDash from "@/components/All/NavDash";
import LogoutIcon from "@/components/svg/LogoutIcon";

const Sidebar = ({ profile, onClick }) => {
  return (
    <div className="w-[20%] min-h-screen p-[60px] flex flex-col justify-start items-center bg-[#0D243D] space-y-[64px] z-50">
      <LogoSidebar to="/" />
      <div className="space-y-[48px]">
        <div className="flex flex-col justify-center items-center space-y-[16px]">
          <img src={profile?.avatarUrl ? profile.avatarUrl : "/assets/Avatar.png"} alt="" className="w-24 h-24 rounded-full" />
          <h1 className="text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">{profile?.username ? profile.username : "Loading..."}</h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-[16px]">
          {navDashDatas.map((data, i) => (
            <NavDash key={i} title={data.title} icon={data.icon} iconSelected={data.iconSelected} to={data.to} />
          ))}
        </div>
      </div>
      <button
        onClick={onClick}
        className="text-white group w-36 [background:var(--Blue-Hover-100,#0D243D)] transition ease-in-out py-2 rounded-lg flex items-center justify-center space-x-2 outline outline-white hover:bg-white hover:text-[#001833]"
      >
        <LogoutIcon className="stroke-white group-hover:stroke-[#001833]" />
        <span className="text-[22px] font-medium font-['Roboto']">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  profile: PropTypes.object,
  onClick: PropTypes.func,
};
