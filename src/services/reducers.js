import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categories/reducer';
import products from './products/reducer';
import brands from './brands/reducer';
import places from './places/reducer';
import shoppingCart from './shoppingCart/reducer';
import modals from './modals/reducer';

const rootReducer = combineReducers({
  categories,
  products,
  brands,
  places,
  shoppingCart,
  modals,
  routing: routerReducer
});

export default rootReducer;
