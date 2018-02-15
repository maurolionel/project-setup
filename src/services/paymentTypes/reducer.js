const initialState = [
  {
    id: 1,
    name: 'Efectivo'
  },
  {
    id: 2,
    name: 'Contrareembolso (efectivo)'
  },
  {
    id: 3,
    name: 'Depósito'
  },
  {
    id: 4,
    name: 'Transferencia'
  },
  {
    id: 5,
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
