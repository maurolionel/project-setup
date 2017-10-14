import { convertStringToNumber } from '../utils';

export const initialState = {
  all: [],
  isFetching: false,
  isFetchingError: false,
  visibilityFilter: 0
};

export const mapProductFromApiToState = aProduct => ({
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
