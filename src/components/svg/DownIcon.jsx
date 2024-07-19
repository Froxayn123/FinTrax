import PropTypes from "prop-types";

const DownIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <g id="down_svgrepo.com">
        <path
          id="Vector"
          d="M3.19214 5.38477L16.8075 5.38477C17.1921 5.38477 17.4614 5.88477 17.1537 6.23092L10.4998 14.3848C10.2691 14.6925 9.76906 14.6925 9.5383 14.3848L2.80753 6.23092C2.5383 5.88477 2.76907 5.38477 3.19214 5.38477Z"
          fill="#ECEFF5"
        />
      </g>
    </svg>
  );
};

DownIcon.propTypes = {
  className: PropTypes.string,
};

export default DownIcon;
