/* core with function for every react app on every kind of device */
import React from 'react';
/* specifics functions for web */
import ReactDOM from 'react-dom';
/* specific css for this component only */
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
