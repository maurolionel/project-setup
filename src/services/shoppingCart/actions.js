import {
  SHOPPING_CART_INCREASE,
  SHOPPING_CART_ADD,
  SHOPPING_CART_DECREASE,
  SHOPPING_CART_REMOVE,
  SHOPPING_CART_EMPTY
} from './actionTypes';

export const shoppingCartIncrease = payload => ({
  type: SHOPPING_CART_INCREASE,
  payload
});

export const shoppingCartAdd = payload => ({
  type: SHOPPING_CART_ADD,
  payload
});

export const shoppingCartDecrease = payload => ({
  type: SHOPPING_CART_DECREASE,
  payload
});

export const shoppingCartRemove = payload => ({
  type: SHOPPING_CART_REMOVE,
  payload
});

export const shoppingCartEmpty = payload => ({
  type: SHOPPING_CART_EMPTY,
  payload
});
