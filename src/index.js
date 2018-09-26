// dependencies: general React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// dependencies: state management with redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './state/reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

/*
    <Provider/> allows state access throughout
    component higherarchy 
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
); 

    registerServiceWorker();
