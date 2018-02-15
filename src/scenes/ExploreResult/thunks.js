import { push } from 'react-router-redux';
import { RSAA } from 'redux-api-middleware';
import appConfig from '../../config';
import { exploreProductsSuccess } from './actions';

export const exploreProducts = query => (dispatch) => {
  dispatch({
    [RSAA]: {
      endpoint: `${appConfig.api.imprek}/product/search/name/${query}`,
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      types: ['EXPLORE PRODUCTS REQUEST', exploreProductsSuccess, 'EXPLORE PRODUCTS FAILURE']
    }
  });
  dispatch(push(`/buscar/${query}`));
};
