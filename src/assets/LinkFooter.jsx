import PropTypes from "prop-types";

const LinkFooter = ({ icon, text }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-3">
        {icon}
        <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">{text}</p>
      </div>
    </>
  );
};

LinkFooter.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default LinkFooter;
