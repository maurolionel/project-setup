import { getJSON } from 'redux-api-middleware';
import { SAVE_SHIPPING, ADD_SALE_SUCCESS } from './actionTypes';

export const saveShipping = payload => ({
  type: SAVE_SHIPPING,
  payload
});

export const addSaleSuccess = {
  type: ADD_SALE_SUCCESS,
  payload: (action, state, response) =>
    getJSON(response)
    .then(json => console.log(json))
};
