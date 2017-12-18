import { RSAA } from 'redux-api-middleware';
import { getProductsRequest, getProductsSuccess, getProductsError } from './actions';
import appConfig from '../../config';

export const getProducts = () => ({
  [RSAA]: {
    endpoint: `${appConfig.api.imprek}product/`,
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    types: [getProductsRequest, getProductsSuccess, getProductsError]
  }
});

export const getProductsOfCategory = categoryName => (dispatch, getState) => {
  const { categories } = getState();
  const categoryId = categories.all.find(c => categoryName === c.name).id;
  dispatch({
    [RSAA]: {
      endpoint: `${appConfig.api.path}products/categories/${categoryId}`,
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      types: [getProductsRequest, getProductsSuccess, getProductsError]
    }
  });
};
