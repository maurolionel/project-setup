import { CALL_API } from 'redux-api-middleware';
import appConfig from '../../config';
import { getProductDetailsFailure, getProductDetailsStarted, getProductDetailsSuccess } from './actions';

/* eslint-disable import/prefer-default-export */
export const getProductDetail = productId => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.imprek}product/search/id/${productId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getProductDetailsStarted, getProductDetailsSuccess , getProductDetailsFailure]
  }
});
