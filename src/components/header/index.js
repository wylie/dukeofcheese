import React from 'react';

import { HeaderStyled } from "./styled.js";

const Header = ({ name }) => {
  return (
    <HeaderStyled>{name}</HeaderStyled>
  );
}

export default Header;
