import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_CATEGORIES } from './actionTypes';
import appConfig from '../../config';

const saveCategoriesInStore = {
  type: GET_CATEGORIES,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

/* eslint-disable import/prefer-default-export */
export const getCategories = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.imprek}venta/categories`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveCategoriesInStore, 'FAILURE']
  }
});
