import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_BRANDS } from './actionTypes';
import appConfig from '../../config';

const saveCategoriesInStore = {
  type: GET_BRANDS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

/* eslint-disable import/prefer-default-export */
export const getBrands = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}brands/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveCategoriesInStore, 'FAILURE']
  }
});
