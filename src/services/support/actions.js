import { getJSON } from 'redux-api-middleware';
import { SET_BRAND, GET_INSTRUCTIVES_SUCCESS } from './actionTypes';

export const setBrand = payload => ({
  type: SET_BRAND,
  payload
});

export const getInstructivesSuccess = {
  type: GET_INSTRUCTIVES_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};
