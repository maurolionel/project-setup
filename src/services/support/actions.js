import { getJSON } from 'redux-api-middleware';
import { SELECT_GUIDE_SUCCESS, GET_GUIDES_REQUEST, GET_GUIDES_SUCCESS, GET_GUIDES_ERROR } from './actionTypes';

export const getGuidesRequest = {
  type: GET_GUIDES_REQUEST
};

export const getGuidesError = {
  type: GET_GUIDES_ERROR
};

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
