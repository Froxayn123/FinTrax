import PropTypes from "prop-types";

const LocationIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className={className}>
      <g id="location-pin_svgrepo.com">
        <path
          id="Vector"
          d="M12.4992 21.8748C16.145 18.1248 19.7909 14.7668 19.7909 10.6248C19.7909 6.48262 16.5263 3.12476 12.4992 3.12476C8.47211 3.12476 5.20752 6.48262 5.20752 10.6248C5.20752 14.7668 8.85335 18.1248 12.4992 21.8748Z"
          stroke="#F5F5F5"
          strokeWidth="1.8003"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.499 13.5415C14.225 13.5415 15.624 12.1424 15.624 10.4165C15.624 8.69062 14.225 7.2915 12.499 7.2915C10.7731 7.2915 9.37402 8.69062 9.37402 10.4165C9.37402 12.1424 10.7731 13.5415 12.499 13.5415Z"
          stroke="#F5F5F5"
          strokeWidth="1.8003"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LocationIcon;

LocationIcon.propTypes = {
  className: PropTypes.string,
};
