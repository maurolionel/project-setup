import { GET_SHIPPING_METHODS_SUCCESS } from './actionTypes';
import { convertStringToNumber } from '../utils';
import { WITHDRAW_OPTION, SHIPPING_OPTION } from './constants';

const initialState = {
  forms: [
    {
      id: WITHDRAW_OPTION,
      name: 'Retiro en el local'
    },
    {
      id: SHIPPING_OPTION,
      name: 'Quiero que me lo envíen'
    }
  ],
  methods: [],
  options: [
    { id: 1, title: 'Moto', delay: '24hs aprox.' },
    { id: 2, title: 'Micro', delay: '48hs aprox.' },
    { id: 3, title: 'Correo Argentino (a domicilio)', delay: '3 a 5 días aprox.' },
    { id: 4, title: 'Correo Argentino (a sucursal)', delay: '3 a 5 días aprox.' }
  ]
};

const mapMethodsFromApiToState = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name
});

function shippingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SHIPPING_METHODS_SUCCESS:
      return {
        ...state,
        methods: action.payload.result.map(mapMethodsFromApiToState)
      };
    default:
      return state;
  }
}

export default shippingsReducer;
