import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import brands from './brands/reducer';
import categories from './categories/reducer';
import contact from './contact/reducer';
import faqs from './faqs/reducer';
import modals from './modals/reducer';
import paymentTypes from './paymentTypes/reducer';
import places from './places/reducer';
import products from './products/reducer';
import purchase from './purchase/reducer';
import search from './search/reducer';
import shippings from './shippings/reducer';
import shoppingCart from './shoppingCart/reducer';
import support from './support/reducer';

const rootReducer = combineReducers({
  routing,
  brands,
  categories,
  contact,
  faqs,
  modals,
  paymentTypes,
  places,
  products,
  purchase,
  search,
  shippings,
  shoppingCart,
  support
});

export default rootReducer;
