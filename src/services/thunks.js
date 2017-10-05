import { push } from 'react-router-redux';
import { modalCloseAll } from './modals/actions';
import { deletePurchase } from './purchase/actions';
import { shoppingCartEmpty } from './shoppingCart/actions';

export const purchaseEnd = () => (dispatch) => {
  dispatch(modalCloseAll());
  dispatch(deletePurchase());
  dispatch(shoppingCartEmpty());
  dispatch(push('/'));
};
