import './index.css';
import * as serviceWorker from './serviceWorker';

// require('./samples/counter-pure-react');
require('./samples/todomvc/index');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
