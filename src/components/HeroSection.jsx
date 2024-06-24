import HeroIntro from "../assets/HeroIntro";
import PropTypes from "prop-types";

const HeroSection = ({ func }) => {
  return (
    <>
      <section className="mt-[140px]">
        <HeroIntro func={func} />
      </section>
    </>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  func: PropTypes.func,
};
