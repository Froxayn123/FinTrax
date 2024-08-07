import PropTypes from "prop-types";

const CopyrightIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className={className}>
      <g id="copyright_svgrepo.com">
        <path
          id="Vector"
          d="M12.4989 20.9507C17.404 20.9507 21.3804 16.9743 21.3804 12.0692C21.3804 7.16411 17.404 3.18774 12.4989 3.18774C7.59381 3.18774 3.61743 7.16411 3.61743 12.0692C3.61743 16.9743 7.59381 20.9507 12.4989 20.9507Z"
          stroke="#ECEFF5"
          strokeWidth="1.2002"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M15.8887 8.66976C14.9905 7.76879 13.7715 7.26111 12.4993 7.2583C11.7101 7.25813 10.9329 7.45258 10.2367 7.82441C9.54049 8.19623 8.94671 8.73394 8.5079 9.39C8.06908 10.046 7.79875 10.8002 7.72091 11.5856C7.64307 12.3711 7.76012 13.1636 8.06163 13.893C8.36313 14.6224 8.83985 15.2663 9.44953 15.7675C10.0592 16.2687 10.783 16.612 11.557 16.7668C12.331 16.9214 13.1311 16.8829 13.8866 16.6547C14.6423 16.4265 15.3299 16.0154 15.8887 15.4581"
          stroke="#ECEFF5"
          strokeWidth="1.2002"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CopyrightIcon;

CopyrightIcon.propTypes = {
  className: PropTypes.string,
};
