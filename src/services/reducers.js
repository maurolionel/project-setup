import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import brands from './brands/reducer';
import categories from './categories/reducer';
import modals from './modals/reducer';
import paymentTypes from './paymentTypes/reducer';
import places from './places/reducer';
import products from './products/reducer';
import purchase from './purchase/reducer';
import shippingMethods from './shippingMethods/reducer';
import shoppingCart from './shoppingCart/reducer';

const rootReducer = combineReducers({
  routing,
  brands,
  categories,
  modals,
  paymentTypes,
  places,
  products,
  purchase,
  shippingMethods,
  shoppingCart
});

export default rootReducer;
