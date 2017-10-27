import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(
    <Provider store>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
