import { CALL_API } from 'redux-api-middleware';
import { getGuidesSuccess, selectGuideSuccess } from './actions';
import appConfig from '../../config';

export const getGuides = brandId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}instructives/brands/${brandId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', getGuidesSuccess, 'FAILURE']
  }
});

export const selectGuide = productId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}instructives/products/${productId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', selectGuideSuccess, 'FAILURE']
  }
});
