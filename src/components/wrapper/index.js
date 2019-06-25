import React, { Component } from 'react';

// import Header from '../header';
// import List from '../list';
import Cheese from '../cheese';

// import { data } from "../data.js";

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
