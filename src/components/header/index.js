import React, { Component } from 'react';

import './_index.css';

class Header extends Component {
  render() {
    return (
      <h1 className="Header">Wylie Fisher</h1>
    );
  }
}

Header.displayName = "Header";

export default Header;
