import React from 'react';
import cn from "classnames";

import PropTypes from "prop-types";

import './_index.css';

import Img from './new-cheese-gr.png';

const Cheese = ({ position }) => {  
  const outputClassName = cn('Cheese', `Cheese_${position}`);

  return (
    <img className={outputClassName} src={Img} alt="" />
  );
}

Cheese.displayName = "🧀";

Cheese.propTypes = {
  position: PropTypes.string
};

Cheese.defaultProps = {
  position: ""
};

export default Cheese;
