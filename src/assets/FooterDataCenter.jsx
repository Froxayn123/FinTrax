import PropTypes from "prop-types";
import LinkFooter from "./LinkFooter";

const FooterDataCenter = ({ name, link }) => {
  return (
    <>
      <div className="flex flex-col space-y-[32px]">
        <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">{name}</h1>
        <div className="flex flex-col justify-start items-start space-y-[16px]">
        {link.map((data, i) => {
          return <LinkFooter key={i} icon={data.icon} text={data.text} href={data.href} />;
        })}
        </div>
      </div>
    </>
  );
};

FooterDataCenter.propTypes = {
  name: PropTypes.string,
  link: PropTypes.array,
};

export default FooterDataCenter;
