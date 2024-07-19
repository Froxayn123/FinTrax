import PropTypes from "prop-types";

const CalendarIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className={className}>
      <g id="calendar-week_svgrepo.com">
        <path
          id="Vector"
          d="M2.5 8H17.5M5.83333 3V4.66667M14.1667 3V4.66667M5.83333 11.3333H14.1667V14.6667H5.83333V11.3333ZM5.16667 18H14.8333C15.7667 18 16.2335 18 16.59 17.8183C16.9036 17.6586 17.1586 17.4036 17.3183 17.09C17.5 16.7335 17.5 16.2667 17.5 15.3333V7.33333C17.5 6.39991 17.5 5.9332 17.3183 5.57668C17.1586 5.26307 16.9036 5.00811 16.59 4.84832C16.2335 4.66667 15.7667 4.66667 14.8333 4.66667H5.16667C4.23325 4.66667 3.76653 4.66667 3.41002 4.84832C3.09641 5.00811 2.84144 5.26307 2.68166 5.57668C2.5 5.9332 2.5 6.39991 2.5 7.33333V15.3333C2.5 16.2667 2.5 16.7335 2.68166 17.09C2.84144 17.4036 3.09641 17.6586 3.41002 17.8183C3.76653 18 4.23324 18 5.16667 18Z"
          stroke="#ECEFF5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CalendarIcon;

CalendarIcon.propTypes = {
  className: PropTypes.string,
};
