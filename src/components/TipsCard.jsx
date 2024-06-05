import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TipsCard = ({ title, desc, img }) => {
  return (
    <div className="w-[602px] h-[400px] p-[40px] flex flex-col justify-start items-center bg-white bg-opacity-10 border border-white border-opacity-10 rounded-lg">
      <div className="grid grid-cols-2 gap-2 justify-center">
        <img src={img} alt="" className="w-[231px] h-[333px] rounded-md" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-white text-base text-[21px] font-semibold font-['Roboto'] mb-[16px]">{title}</h1>
          <p className="text-white text-sm font-normal font-['Roboto'] mb-[24px]">{desc}</p>
          <Link to="#" className="text-white underline text-sm font-normal">Read more</Link>
        </div>
      </div>
    </div>
  );
};

TipsCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

export default TipsCard;