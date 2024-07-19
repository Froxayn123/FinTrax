import PropTypes from "prop-types";

const PlanningIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
      <path d="M10.7812 20.625H7.96875V24.375H10.7812V20.625Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.4062 15H13.5938V24.375H16.4062V15Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.0312 9.375H19.2188V24.375H22.0312V9.375Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.625 16.875L16.875 5.625" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.0625 5.625H16.875V8.4375" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.625 24.375H24.375" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PlanningIcon;

PlanningIcon.propTypes = {
  className: PropTypes.string,
};
