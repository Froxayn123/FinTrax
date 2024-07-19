import PropTypes from "prop-types";

const UpDownIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <g id="up-down-arrow_svgrepo.com">
        <path id="primary" d="M9.1665 5.83331L6.6665 3.33331L4.1665 5.83331" stroke="url(#paint0_linear_3175_29926)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="primary_2" d="M10.8335 14.1667L13.3335 16.6667L15.8335 14.1667" stroke="url(#paint1_linear_3175_29926)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path id="primary_3" d="M6.6665 16.6666V3.33331M13.3332 3.33331V16.6666" stroke="url(#paint2_linear_3175_29926)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_3175_29926" x1="6.6665" y1="3.33331" x2="6.6665" y2="5.83331" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A00D4" />
          <stop offset="1" stopColor="#8F19BD" />
        </linearGradient>
        <linearGradient id="paint1_linear_3175_29926" x1="13.3335" y1="14.1667" x2="13.3335" y2="16.6667" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A00D4" />
          <stop offset="1" stopColor="#8F19BD" />
        </linearGradient>
        <linearGradient id="paint2_linear_3175_29926" x1="9.99984" y1="3.33331" x2="9.99984" y2="16.6666" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A00D4" />
          <stop offset="1" stopColor="#8F19BD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

UpDownIcon.propTypes = {
  className: PropTypes.string,
};

export default UpDownIcon;
