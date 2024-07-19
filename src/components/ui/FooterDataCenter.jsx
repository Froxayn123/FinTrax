import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterDataCenter = ({ name, link }) => {
  return (
    <div className="flex flex-col space-y-[32px]">
      <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">{name}</h1>
      <div className="flex flex-col justify-start items-start space-y-[16px]">
        {link.map((data, i) => (
          <Link key={i} to={data.to} className="flex justify-center items-center text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight space-x-2">
            {data.icon}
            <h1>{data.text}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

FooterDataCenter.propTypes = {
  name: PropTypes.string,
  link: PropTypes.array,
};

export default FooterDataCenter;
