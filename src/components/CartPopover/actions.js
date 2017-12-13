import { HIDE_CART_POPOVER, SHOW_CART_POPOVER } from './actionTypes';

export const hideCartPopover = () => ({
  type: HIDE_CART_POPOVER
});

export const showCartPopover = () => ({
  type: SHOW_CART_POPOVER
});
