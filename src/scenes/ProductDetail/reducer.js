import { GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_SUCCESS, RESET_PRODUCT_DETAIL } from './actionTypes';
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
    case GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        data: mapProductDetailResponse(action.payload.result[0]),
        isLoading: false
      };
    case RESET_PRODUCT_DETAIL:
      return initialState;
    default:
      return state;
  }
}
