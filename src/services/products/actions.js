import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_PRODUCTS } from './actionTypes';
import appConfig from '../../config';

const saveProductsInStore = {
  type: GET_PRODUCTS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then((json) => {
        console.log(json, state, action);
        // TODO: guardar en localStore || sessionStorage
        // login(json.session.session, state);
        return json;
      })
};

/* eslint-disable import/prefer-default-export */
export const getProducts = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}test.json`,
    method: 'GET',
    types: ['REQUEST', saveProductsInStore, 'FAILURE']
  }
});
