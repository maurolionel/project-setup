import { getJSON } from 'redux-api-middleware';
import { SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_ERROR, UPDATE_INPUT_VALUE } from './actionTypes';

export const submitFormRequest = {
  type: SUBMIT_FORM_REQUEST
};

export const submitFormSuccess = {
  type: SUBMIT_FORM_SUCCESS,
  payload: (action, state, response) =>
    getJSON(response)
      .then(json => json)
};

export const submitFormError = {
  type: SUBMIT_FORM_ERROR
};

export const updateInputValue = payload => ({
  type: UPDATE_INPUT_VALUE,
  payload
});
