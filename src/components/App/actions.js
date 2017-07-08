import { SET_USER } from '../../services/actionTypes';

export function setUser(payload) {
  return {
    type: SET_USER,
    payload
  };
}
