import { GET_SHIPPING_METHODS } from './actionTypes';
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
      name: 'Envío a domicilio'
    }
  ],
  methods: []
};

const mapMethodsFromApiToState = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name
});

function shippingMethodsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SHIPPING_METHODS:
      return {
        ...state,
        methods: action.payload.result.map(mapMethodsFromApiToState)
      };
    default:
      return state;
  }
}

export default shippingMethodsReducer;
