import PropTypes from "prop-types";

const SearchIcon = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className={className}>
      <g id="Icons/search_24px">
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.26 13.77L20.99 19.5L19.5 20.99L13.77 15.26C12.7 16.03 11.41 16.5 10 16.5C6.41 16.5 3.5 13.59 3.5 10C3.5 6.41 6.41 3.5 10 3.5C13.59 3.5 16.5 6.41 16.5 10C16.5 11.41 16.03 12.7 15.26 13.77ZM10 5.5C7.51 5.5 5.5 7.51 5.5 10C5.5 12.49 7.51 14.5 10 14.5C12.49 14.5 14.5 12.49 14.5 10C14.5 7.51 12.49 5.5 10 5.5Z"
          fill="#ECEFF5"
        />
      </g>
    </svg>
  );
};

SearchIcon.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon;
