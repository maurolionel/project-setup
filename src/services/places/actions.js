import { RSAA, getJSON } from 'redux-api-middleware';
import {
  GET_PROVINCES,
  GET_LOCATIONS,
  GET_PROVINCES_REQUEST,
  GET_LOCATIONS_REQUEST,
  GET_PROVINCES_MOTO,
  GET_LOCATIONS_MOTO_SUCCESS,
  GET_CORREO_BRANCH_OFFICES_SUCCESS,
  GET_CORREO_BRANCH_OFFICES_REQUEST
} from './actionTypes';
import appConfig from '../../config';

const getProvincesRequest = {
  type: GET_PROVINCES_REQUEST
};

const getLocationsRequest = {
  type: GET_LOCATIONS_REQUEST
};

const getCorreoBranchOfficesRequest = {
  type: GET_CORREO_BRANCH_OFFICES_REQUEST
};

const getProvincesSuccess = {
  type: GET_PROVINCES,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

const getCorreoBranchOfficesSuccess = {
  type: GET_CORREO_BRANCH_OFFICES_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

const getLocationsSuccess = {
  type: GET_LOCATIONS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

const getProvincesMotoSuccess = {
  type: GET_PROVINCES_MOTO,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

const getLocationsMotoSuccess = {
  type: GET_LOCATIONS_MOTO_SUCCESS,
  payload: (action, state, rsp) =>
    getJSON(rsp)
      .then(json => json)
};

export const getProvinces = () => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}province/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getProvincesRequest, getProvincesSuccess, 'FAILURE PROVINCES']
  }
});

const getLocationsForMoto = provinceId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}shipping/moto/location/provinces/${provinceId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getLocationsRequest, getLocationsMotoSuccess, 'FAILURE']
  }
});

const getLocations = provinceId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}location/province/${provinceId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getLocationsRequest, getLocationsSuccess, 'FAILURE']
  }
});

export const getLocationsForProvince = provinceId => (dispatch, getState) => {
  const { shippingOption } = getState().purchase.data;
  const intShippingOption = parseInt(shippingOption, 10);
  if (intShippingOption === 1) {
    dispatch(getLocationsForMoto(provinceId));
  } else if (intShippingOption === 2 || intShippingOption === 3 || intShippingOption === 4) {
    dispatch(getLocations(provinceId));
  }
};

export const getProvincesMoto = () => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}shipping/moto/location/provinces/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getProvincesRequest, getProvincesMotoSuccess, 'FAILURE']
  }
});

export const getCorreoBranchOffices = provinceId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}shipping/correo-argentino/sucursales/${provinceId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getCorreoBranchOfficesRequest, getCorreoBranchOfficesSuccess, 'FAILURE']
  }
});
