import { navigations } from "../data/MenuAdmin";
import NavLink from "./NavLink";

const MenuAdmin = () => {
  return (
    <>
      <div className="w-[269px] flex justify-evenly items-center capitalize font-roboto text-[14px] text-[#ECEFF5] relative">
        {navigations.map((navigantion, i) => {
          return <NavLink key={i} id={navigantion.id} title={navigantion.title} to={navigantion.to} icon={navigantion.icon} />;
        })}
      </div>
    </>
  );
};

export default MenuAdmin;
