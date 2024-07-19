import PropTypes from "prop-types";

const ChecklistIcon = (className) => {
  return (
    <svg className={`animate-pulse ${className}`} xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
      <g id="Free-Icons">
        <g id="Group">
          <g id="Shape">
            <path id="Vector" d="M39 75C58.8823 75 75 58.8823 75 39C75 19.1177 58.8823 3 39 3C19.1177 3 3 19.1177 3 39C3 58.8823 19.1177 75 39 75Z" stroke="#64CC4A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Vector_2" d="M19 36.3987L35 52.3987L59 28.3999" stroke="#64CC4A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ChecklistIcon;

ChecklistIcon.propTypes = {
  className: PropTypes.string,
};
