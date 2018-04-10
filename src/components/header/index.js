import React, { Component } from 'react';

import logo from './logo.svg';

import './_index.css';

class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Subway Battle</h1>
      </header>
    );
  }
}

Header.displayName = "Header";

export default Header;
