import React, { Component } from 'react';

import Header from '../header';
import Cheese from '../cheese';
import List from '../list';

import { data } from "../data.js";

import './_index.css';

class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Cheese />
      </div>
    );
  }
}

Wrapper.displayName = "Wrapper";

export default Wrapper;
