import { getJSON } from 'redux-api-middleware';
import {
  ADD_PURCHASE,
  DELETE_PURCHASE,
  CREATE_PREFERENCE_REQUEST,
  CREATE_PREFERENCE_SUCCESS,
  SET_INPUT_VALUE,
  SELECT_PAYMENT
} from './actionTypes';

export const addPurchase = payload => ({
  type: ADD_PURCHASE,
  payload
});

export const deletePurchase = payload => ({
  type: DELETE_PURCHASE,
  payload
});

export const setInputValue = payload => ({
  type: SET_INPUT_VALUE,
  payload
});

export const selectPayment = payload => ({
  type: SELECT_PAYMENT,
  payload
});

export const createPreferenceRequest = {
  type: CREATE_PREFERENCE_REQUEST
};

export const createPreferenceSuccess = {
  type: CREATE_PREFERENCE_SUCCESS,
  payload: (action, state, response) =>
    getJSON(response)
      .then(json => json.response.init_point)
};
