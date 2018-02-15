import { getJSON } from 'redux-api-middleware';
import { EXPLORE_GUIDES, EXPLORE_PRODUCTS } from './actionTypes';

export const exploreGuides = payload => ({
  type: EXPLORE_GUIDES,
  payload
});

export const exploreProductsSuccess = {
  type: EXPLORE_PRODUCTS,
  payload: (action, state, response) =>
    getJSON(response)
      .then(json => json)
};
