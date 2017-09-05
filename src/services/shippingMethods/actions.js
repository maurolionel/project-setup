import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_SHIPPING_METHODS } from './actionTypes';
import appConfig from '../../config';

const saveShippingMethodsInStore = {
  type: GET_SHIPPING_METHODS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

/* eslint-disable import/prefer-default-export */
export const getShippingMethods = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}shipping_methods/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveShippingMethodsInStore, 'FAILURE']
  }
});
