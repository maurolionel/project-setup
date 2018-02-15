import { RSAA } from 'redux-api-middleware';
import appConfig from '../../config';
import { getProductDetailFailure, getProductDetailStarted, getProductDetailSuccess } from './actions';

/* eslint-disable import/prefer-default-export */
export const getProductDetail = productId => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}product/search/id/${productId}`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getProductDetailStarted, getProductDetailSuccess, getProductDetailFailure]
  }
});