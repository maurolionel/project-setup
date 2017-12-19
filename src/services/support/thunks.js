import { RSAA } from 'redux-api-middleware';
import { getGuidesRequest, getGuidesSuccess, getGuidesError, selectGuideSuccess } from './actions';
import appConfig from '../../config';

export const getGuides = brandId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}product/model/brand/${brandId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getGuidesRequest, getGuidesSuccess, getGuidesError]
  }
});

export const selectGuide = productId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}product/instructive/model/${productId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: ['REQUEST', selectGuideSuccess, 'FAILURE']
  }
});
