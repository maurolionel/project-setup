const formatValidNumber = (quantity) => {
  const numberQuantity = parseInt(quantity, 10);
  return numberQuantity > 0 ? numberQuantity : 0;
};

const getProductFromState = (allProducts, id) =>
  allProducts.find(aProduct => id === aProduct.id);

const isProductInCart = (productsInCart, id) =>
  productsInCart.some(aProductInCart => id === aProductInCart.id);

export {
  formatValidNumber,
  getProductFromState,
  isProductInCart
};
