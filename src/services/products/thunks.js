import { CALL_API } from 'redux-api-middleware';
import { getProductsRequest, getProductsSuccess, getProductsError } from './actions';
import appConfig from '../../config';

export const getProducts = () => ({
  [CALL_API]: {
    endpoint: `${appConfig.api.imprek}products`,
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
    [CALL_API]: {
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
