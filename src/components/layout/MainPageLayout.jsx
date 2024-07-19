import PropTypes from "prop-types";
import Polygon1 from "@/components/ui/Polygon1";
import Polygon2 from "@/components/ui/Polygon2";
import Polygon3 from "@/components/ui/Polygon3";
import Arrow from "@/components/ui/Arrow";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Polygon1 />
      <Polygon2 />
      <Polygon3 />
      <Arrow />
      {children}
    </>
  );
};

MainPageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MainPageLayout;
