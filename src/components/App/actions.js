import { SET_USER } from '../../services/actionTypes';

/* eslint-disable import/prefer-default-export */
export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  };
}
