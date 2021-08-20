import React from 'react';

import Header from './components/header';
import Cheese from './components/cheese';
import List from './components/list';

import { Wrap } from "./styled.js";

import { data } from "./components/allData.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Cheese position="top" />
    <Header name="Wylie Fisher" />
    <List type="email" email="wylie@dukeofcheese.com" />
    <List type="links" data={data} />
    <Cheese position="bottom" />
  </Wrap>
);

export default App;
