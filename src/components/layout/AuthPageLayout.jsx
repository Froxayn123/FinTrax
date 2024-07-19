import PropTypes from "prop-types";
import Coin from "/assets/Coin.png";
import Ellipse from "@/components/svg/Ellipse";

const AuthPageLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <Ellipse className="absolute -start-40 -top-40" />
      <Ellipse className="absolute end-40 -bottom-40 rotate-180 -z-10" />
      <img src={Coin} alt="Coin.png" className="absolute end-[700px] -top-32 rotate-[-100deg] -z-10" />
      <img src={Coin} alt="Coin.png" className="absolute -start-24 -bottom-24 -z-10" />
      <img src={Coin} alt="Coin.png" className="absolute -end-28 -bottom-48 rotate-[-60deg] -z-10" />
      {children}
    </div>
  );
};

AuthPageLayout.propTypes = {
  children: PropTypes.object,
};

export default AuthPageLayout;
