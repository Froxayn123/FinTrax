// LinkFooter.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkFooter = ({ text, to }) => {
  return (
    <Link to={to} className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">
      {text}
    </Link>
  );
};

LinkFooter.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default LinkFooter;
