import LogoNavbar from "@/components/ui/LogoNavbar";
import NavList from "@/components/NavList";
import PropTypes from "prop-types";
import ButtonTransparent from "@/components/ui/ButtonTransparent";
import { Link } from "react-router-dom";
import { navigations } from "@/data/Navigations";

const Navbar = ({ profile, onClickButton }) => {
  return (
    <>
      <div className="fixed start-[100px] end-[100px] top-[32px] py-[16px] px-[32px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px] z-50">
        <LogoNavbar to="/" />
        <NavList navigations={navigations[0].datas} />
        {profile ? (
          <Link to="/overview">
            <img src={profile?.avatarUrl ? profile.avatarUrl : "/assets/Avatar.png"} alt="User Avatar" className="w-12 h-12 rounded-full" />
          </Link>
        ) : (
          <ButtonTransparent type="button" title="Login" size="22" onClick={onClickButton} />
        )}
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  profile: PropTypes.object,
  onClickButton: PropTypes.func,
};
