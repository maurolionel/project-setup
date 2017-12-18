import { convertStringToNumber, normalizePrices } from '../utils';

export const initialState = {
  all: [],
  isFetching: false,
  isFetchingError: false,
  visibilityFilter: 0
};

export const mapProductFromApiToState = aProduct => ({
  id: convertStringToNumber(aProduct.id),
  categoryId: convertStringToNumber(aProduct.categoryId),
  brandId: convertStringToNumber(aProduct.brandId),
  name: aProduct.name,
  prices: aProduct.prices.reduce(normalizePrices, {}),
  images: aProduct.images,
  description: aProduct.description || 'Sin descripción',
  hasStock: Boolean(convertStringToNumber(aProduct.hasStock))
});
