import { getJSON } from 'redux-api-middleware';
import { SELECT_GUIDE_SUCCESS, GET_GUIDES_SUCCESS } from './actionTypes';

export const getGuidesSuccess = {
  type: GET_GUIDES_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const selectGuideSuccess = {
  type: SELECT_GUIDE_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};
