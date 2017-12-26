import { getJSON } from 'redux-api-middleware';
import { GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_STARTED, GET_PRODUCT_DETAIL_SUCCESS, RESET_PRODUCT_DETAIL } from './actionTypes';

export const getProductDetailFailure = {
  type: GET_PRODUCT_DETAIL_FAILURE
};

export const getProductDetailStarted = {
  type: GET_PRODUCT_DETAIL_STARTED
};

export const getProductDetailSuccess = {
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp).then(json => json)
};

export const resetProductDetail = () => ({
  type: RESET_PRODUCT_DETAIL
});
