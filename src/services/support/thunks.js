import { CALL_API } from 'redux-api-middleware';
import { getGuidesRequest, getGuidesSuccess, getGuidesError, selectGuideSuccess } from './actions';
import appConfig from '../../config';

export const getGuides = brandId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}guides/brands/${brandId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getGuidesRequest, getGuidesSuccess, getGuidesError]
  }
});

export const selectGuide = productId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}guides/products/${productId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', selectGuideSuccess, 'FAILURE']
  }
});
