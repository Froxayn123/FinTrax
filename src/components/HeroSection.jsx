import HeroIntro from "../assets/HeroIntro";
import PropTypes from "prop-types";

const HeroSection = ({ url }) => {
  return (
    <>
      <section className="mt-[140px]">
        <HeroIntro url={url} />
      </section>
    </>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  url: PropTypes.string,
};
