import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_PRODUCTS } from './actionTypes';
import appConfig from '../../config';

const saveProductsInStore = {
  type: GET_PRODUCTS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

/* eslint-disable import/prefer-default-export */
export const getProducts = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}products/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveProductsInStore, 'FAILURE']
  }
});
