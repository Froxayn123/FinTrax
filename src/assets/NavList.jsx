import { navigations } from "../data/Navigations";
import NavLink from "./NavLink";

const NavList = () => {
  return (
    <>
      <div className="w-[480px] flex justify-evenly items-center capitalize font-roboto text-[24px] text-[#ECEFF5] relative">
        {navigations.map((navigantion, i) => {
          return <NavLink key={i} id={navigantion.id} title={navigantion.title} to={navigantion.to} icon={navigantion.icon} />;
        })}
      </div>
    </>
  );
};

export default NavList;
