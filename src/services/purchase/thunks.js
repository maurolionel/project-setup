import { CALL_API } from 'redux-api-middleware';
import { createPreferenceRequest, createPreferenceSuccess } from './actions';
import appConfig from '../../config';

/* eslint-disable import/prefer-default-export */
export const createPreference = items => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}payments/create-preference/`,
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(items),
    types: [createPreferenceRequest, createPreferenceSuccess, 'FAILURE']
  }
});
