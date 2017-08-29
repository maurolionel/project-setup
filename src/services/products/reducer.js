import { GET_PRODUCTS, SET_VISIBILITY_FILTER } from './actionTypes';
import { convertStringToNumber } from '../utils';

const initialState = {
  all: null,
  visibilityFilter: 0
};

const mapProductFromApiToState = aProduct => ({
  id: convertStringToNumber(aProduct.id),
  mlId: convertStringToNumber(aProduct.mlId),
  categoryId: convertStringToNumber(aProduct.category_id),
  brandId: convertStringToNumber(aProduct.brand_id),
  name: aProduct.name,
  price: convertStringToNumber(aProduct.price),
  date: aProduct.date,
  description: aProduct.description || 'Sin descripción',
  isActive: Boolean(convertStringToNumber(aProduct.is_active)),
  isOfferMode: Boolean(convertStringToNumber(aProduct.is_offer_mode)),
  hasStock: Boolean(convertStringToNumber(aProduct.has_stock))
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all: action.payload.result.map(mapProductFromApiToState)
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload.categoryId
      };
    default:
      return state;
  }
}

export default productsReducer;
