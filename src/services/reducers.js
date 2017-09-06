import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import brands from './brands/reducer';
import categories from './categories/reducer';
import modals from './modals/reducer';
import places from './places/reducer';
import products from './products/reducer';
import sales from './sales/reducer';
import shippingMethods from './shippingMethods/reducer';
import shoppingCart from './shoppingCart/reducer';

const rootReducer = combineReducers({
  routing,
  brands,
  categories,
  modals,
  places,
  products,
  sales,
  shippingMethods,
  shoppingCart
});

export default rootReducer;
