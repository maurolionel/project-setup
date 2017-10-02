import { CALL_API } from 'redux-api-middleware';
import { createPreferenceRequest, createPreferenceSuccess } from './actions';
import { MERCADO_PAGO } from './constants';
import { modalPaymentOpen, modalPurchaseOpen } from '../modals/actions';
import appConfig from '../../config';

/* eslint-disable import/prefer-default-export */
export const setPurchase = () => (dispatch, getState) => {
  const { purchase: { paymentType }, shoppingCart: { all: items } } = getState();
  if (paymentType === MERCADO_PAGO) {
    dispatch(modalPaymentOpen());
    dispatch({
      [CALL_API]: {
        endpoint: `${appConfig.api.path}payments/create-preference/`,
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(items),
        types: [createPreferenceRequest, createPreferenceSuccess, 'FAILURE']
      }
    });
  } else {
    dispatch(modalPurchaseOpen());
    console.log('metodo de pago', paymentType);
  }
};
