import { getJSON } from 'redux-api-middleware';
import { SAVE_SHIPPING, CREATE_PREFERENCE_REQUEST, CREATE_PREFERENCE_SUCCESS } from './actionTypes';

export const saveShipping = payload => ({
  type: SAVE_SHIPPING,
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
