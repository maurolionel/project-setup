import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_PROVINCES, GET_LOCATIONS } from './actionTypes';
import appConfig from '../../config';

const saveProvincesInStore = {
  type: GET_PROVINCES,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const getProvinces = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}places/provinces/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveProvincesInStore, 'FAILURE']
  }
});

const saveLocationsInStore = {
  type: GET_LOCATIONS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const getLocations = provinceId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}places/provinces/${provinceId}/locations/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', saveLocationsInStore, 'FAILURE']
  }
});
