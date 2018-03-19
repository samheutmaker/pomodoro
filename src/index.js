import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './js/App';
import registerServiceWorker from './js/util/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
