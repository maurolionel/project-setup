import { RSAA, getJSON } from 'redux-api-middleware';
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
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}product/characteristic/2`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveCategoriesInStore, 'FAILURE']
  }
});
