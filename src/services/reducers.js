import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categories/reducer';
import products from './products/reducer';
import shoppingCart from './shoppingCart/reducer';

const rootReducer = combineReducers({
  categories,
  products,
  shoppingCart,
  routing: routerReducer
});

export default rootReducer;
