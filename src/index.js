import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Wrapper from './components/wrapper';

import './index.css';

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
