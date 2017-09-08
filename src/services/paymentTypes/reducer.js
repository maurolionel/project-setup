const initialState = [
  {
    id: 1,
    name: 'Efectivo'
  },
  {
    id: 2,
    name: 'Depósito / Transferencia'
  },
  {
    id: 3,
    name: 'MercadoPago'
  }
];

function paymentTypesReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default paymentTypesReducer;
