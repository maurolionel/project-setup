import { EXPLORE_GUIDES, EXPLORE_PRODUCTS } from './actionTypes';

export const exploreGuides = payload => ({
  type: EXPLORE_GUIDES,
  payload
});

export const exploreProducts = payload => ({
  type: EXPLORE_PRODUCTS,
  payload
});
