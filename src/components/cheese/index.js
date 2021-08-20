import React from 'react';

import { BigCheese } from "./styled.js";

import CheeseImage from '../../assets/new-cheese-gr.png';

const Cheese = ({ position }) => {  
  return (
    <BigCheese alt="" position={position} src={CheeseImage} />
  );
}

export default Cheese;
