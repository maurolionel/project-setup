import { RSAA } from 'redux-api-middleware';
import {
  createPreferenceRequest,
  createPreferenceSuccess,
  getPreferenceRequest,
  getPreferenceSuccess
} from './actions';
import { MERCADO_PAGO } from './constants';
import { modalPaymentOpen, modalPurchaseOpen } from '../modals/actions';
import appConfig from '../../config';

export const setPurchase = () => (dispatch, getState) => {
  const { purchase: { paymentType }, shoppingCart: { all: items } } = getState();
  if (paymentType === MERCADO_PAGO) {
    dispatch(modalPaymentOpen());
    dispatch({
      [RSAA]: {
        endpoint: `${appConfig.api.path}payments/preferences/create`,
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
  }
};

export const getPreference = () => (dispatch, getState) => {
  const { id } = getState().purchase.preference;
  dispatch({
    [RSAA]: {
      endpoint: `${appConfig.api.path}payments/preferences/${id}`,
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      types: [getPreferenceRequest, getPreferenceSuccess, 'FAILURE']
    }
  });
};
