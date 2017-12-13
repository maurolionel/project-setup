import { getJSON } from 'redux-api-middleware';
import { GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_STARTED, GET_PRODUCT_DETAILS_SUCCESS } from './actionTypes';

export const getProductDetailsFailure = {
  type: GET_PRODUCT_DETAILS_FAILURE
};

export const getProductDetailsStarted = {
  type: GET_PRODUCT_DETAILS_STARTED,
  payload: (action, state, rsp) =>
    getJSON(rsp).then(json => json)
};

export const getProductDetailsSuccess = {
  type: GET_PRODUCT_DETAILS_SUCCESS
};
