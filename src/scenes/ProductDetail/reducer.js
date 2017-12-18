import { GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_SUCCESS } from './actionTypes';
import { convertStringToNumber, normalizePrices } from '../../services/utils';

const initialState = {
  data: {},
  isLoading: true
};

const mapProductDetailResponse = product => ({
  ...product,
  id: convertStringToNumber(product.id),
  hasStock: Boolean(convertStringToNumber(product.hasStock)),
  inOffer: Boolean(convertStringToNumber(product.inOffer)),
  prices: product.prices.reduce(normalizePrices, {})
});

export default function productDetail(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        data: mapProductDetailResponse(action.payload.result[0]),
        isLoading: false
      };
    case 'DELETE':
      return {
        ...initialState,
        isLoading: false
      };
    default:
      return state;
  }
}
