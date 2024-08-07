import PropTypes from "prop-types";

const PlusIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className={className}>
      <g id="icon">
        <path id="icon_2" d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#ECEFF5" />
      </g>
    </svg>
  );
};

export default PlusIcon;

PlusIcon.propTypes = {
  className: PropTypes.string,
};
