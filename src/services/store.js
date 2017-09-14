import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { loadState } from './localStorage';

export const history = createHistory();

export default createStore(
  rootReducer,
  loadState(),
  compose(
    applyMiddleware(routerMiddleware(history), thunk, apiMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
