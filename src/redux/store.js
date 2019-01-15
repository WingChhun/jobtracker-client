import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
//* Middleware array
const middleware = [thunk, logger];

//* Creatle the store
const store = createStore(rootReducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV != 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : null));

export default store;