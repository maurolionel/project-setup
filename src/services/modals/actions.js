import {
  MODAL_SCHEDULES_OPEN,
  MODAL_SCHEDULES_CLOSE,
  MODAL_SHIPPINGS_OPEN,
  MODAL_SHIPPINGS_CLOSE,
  MODAL_PAYMENT_OPEN,
  MODAL_PAYMENT_CLOSE,
  MODAL_PURCHASE_OPEN,
  MODAL_PURCHASE_CLOSE,
  MODAL_CLOSE_ALL
} from './actionTypes';

export const modalSchedulesOpen = () => ({
  type: MODAL_SCHEDULES_OPEN
});

export const modalSchedulesClose = () => ({
  type: MODAL_SCHEDULES_CLOSE
});

export const modalShippingsOpen = () => ({
  type: MODAL_SHIPPINGS_OPEN
});

export const modalShippingsClose = () => ({
  type: MODAL_SHIPPINGS_CLOSE
});

export const modalPaymentOpen = () => ({
  type: MODAL_PAYMENT_OPEN
});

export const modalPaymentClose = () => ({
  type: MODAL_PAYMENT_CLOSE
});

export const modalPurchaseOpen = () => ({
  type: MODAL_PURCHASE_OPEN
});

export const modalPurchaseClose = () => ({
  type: MODAL_PURCHASE_CLOSE
});

export const modalCloseAll = () => ({
  type: MODAL_CLOSE_ALL
});
