import { getJSON } from 'redux-api-middleware';
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, SET_VISIBILITY_FILTER } from './actionTypes';

export const setVisibilityFilter = payload => ({
  type: SET_VISIBILITY_FILTER,
  payload
});

export const getProductsRequest = {
  type: GET_PRODUCTS_REQUEST
};

export const getProductsSuccess = {
  type: GET_PRODUCTS_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const getProductsError = {
  type: GET_PRODUCTS_ERROR
};
