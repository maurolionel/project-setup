import { RSAA } from 'redux-api-middleware';
import { getShippingMethodsSuccess, getShippingGroupsSuccess } from './actions';
import appConfig from '../../config';

export const getShippingMethods = locationId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.path}shippings/methods/locations/${locationId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', getShippingMethodsSuccess, 'FAILURE']
  }
});

export const getShippingGroups = () => ({
  [RSAA]: {
    endpoint: `${appConfig.api.path}shippings/groups/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', getShippingGroupsSuccess, 'FAILURE']
  }
});
