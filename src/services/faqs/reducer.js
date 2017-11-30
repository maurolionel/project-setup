const initialState = {
  all: [
    {
      id: 1,
      question: '¿Qué es un sistema continuo o CISS?',
      answer: 'Un sistema continuo o CISS (Continuos Ink Suplier System) es un bla bla bla ble ble ble...'
    },
    {
      id: 2,
      question: '¿Qué es un sistema continuo o CISS?',
      answer: 'Un sistema continuo o CISS (Continuos Ink Suplier System) es un bla bla bla ble ble ble...'
    }
  ]
};

function faqs(state = initialState, action = {}) {
  switch (action.types) {
    default:
      return state;
  }
}

export default faqs;
