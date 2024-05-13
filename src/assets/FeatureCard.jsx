import PropTypes from "prop-types";

const FeatureCard = ({ img, title, desc }) => {
  return (
    <>
      <div className="w-[350px] h-[266px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="space-y-[4px]">
          <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">{title}</h1>
          <p className="text-gray-200 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;

FeatureCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
