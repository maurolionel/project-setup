import { getJSON } from 'redux-api-middleware';
import { GET_SHIPPING_METHODS_SUCCESS, GET_SHIPPING_GROUPS_SUCCESS } from './actionTypes';

export const getShippingMethodsSuccess = {
  type: GET_SHIPPING_METHODS_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const getShippingGroupsSuccess = {
  type: GET_SHIPPING_GROUPS_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};
