import PropTypes from "prop-types";

const BudgetIcon = (className) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
    <path
      d="M22.4062 15.9844C22.4062 20.625 18.6562 24.375 14.0156 24.375C9.375 24.375 5.625 20.625 5.625 15.9844C5.625 11.3437 9.375 7.59375 14.0156 7.59375V15.9844H22.4062Z"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M24.375 14.0156C24.375 9.375 20.625 5.625 15.9844 5.625V14.0156H24.375Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0156 15.9844L8.0625 21.9375" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.125 19.875L14.5313 24.3281" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.2344 17.7656L17.8125 23.3906" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1562 21.5625L15.9375 17.3437L14.625 16.0312" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.6563 19.4062L18.3281 16.0312" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BudgetIcon;

BudgetIcon.PropTypes = {
  className: PropTypes.string,
};
