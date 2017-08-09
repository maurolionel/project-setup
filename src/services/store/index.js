import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../../rootReducer';

export const history = createHistory();

export default createStore(rootReducer, undefined, compose(
  applyMiddleware(routerMiddleware(history), thunk, apiMiddleware, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
