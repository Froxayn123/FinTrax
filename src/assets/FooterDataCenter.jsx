import PropTypes from "prop-types";
import LinkFooter from "./LinkFooter";

const FooterDataCenter = ({ name, link }) => {
  return (
    <div className="flex flex-col space-y-[32px]">
        <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">{name}</h1>
        <div className="flex flex-col justify-start items-start space-y-[16px]">
          {link.map((data, i) => (
            <LinkFooter key={i} text={data.text} to={data.to} />
          ))}
        </div>
    </div>
  );
};

FooterDataCenter.propTypes = {
  name: PropTypes.string,
  link: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  )
};

export default FooterDataCenter;
