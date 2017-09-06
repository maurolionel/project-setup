import { CALL_API } from 'redux-api-middleware';
import { addSaleSuccess } from './actions';
import appConfig from '../../config';

/* eslint-disable import/prefer-default-export */
export const addSale = sale => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.path}sales/add/`,
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(sale),
    types: ['REQUEST', addSaleSuccess, 'FAILURE']
  }
});
