import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './services/categories/reducer';
import products from './services/products/reducer';

const rootReducer = combineReducers({
  categories,
  products,
  routing: routerReducer
});

export default rootReducer;
