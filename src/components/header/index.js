import React from 'react';
import PropTypes from "prop-types";

import './_index.css';

const Header = ({ name }) => {
  return (
    <h1 className="Header">{name}</h1>
  );
}

Header.displayName = "Header";

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: ""
};

export default Header;
