import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
             <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
