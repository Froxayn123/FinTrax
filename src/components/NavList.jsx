import PropTypes from "prop-types";
import NavLink from "@/components/ui/NavLink";

const NavList = ({ navigations }) => {
  return (
    <>
      <div className="flex justify-evenly items-center capitalize font-roboto text-[24px] text-[#ECEFF5] relative space-x-10">
        {navigations.map((navigation, i) => {
          return <NavLink key={i} id={navigation.id} title={navigation.title} to={navigation.to} />;
        })}
      </div>
    </>
  );
};

export default NavList;

NavList.propTypes = {
  navigations: PropTypes.array.isRequired,
};
