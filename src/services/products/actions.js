import { CALL_API, getJSON } from 'redux-api-middleware';
import { GET_PRODUCTS, SET_VISIBILITY_FILTER } from './actionTypes';
import appConfig from '../../config';

const setVisibilityFilter = payload => ({
  type: SET_VISIBILITY_FILTER,
  payload
});

const getProducts = () => {
  const saveProductsInStore = {
    type: GET_PRODUCTS,
    payload: (action, state, rsp) =>
      getJSON(rsp)
        .then(json => json)
  };
  return {
    [CALL_API]: {
      endpoint: `${appConfig.api.path}products/`,
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      types: ['REQUEST', saveProductsInStore, 'FAILURE']
    }
  };
};

export {
  setVisibilityFilter,
  getProducts
};
