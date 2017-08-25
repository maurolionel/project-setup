import { connect } from 'react-redux';
import HighlightedProducts from './component';

const byProductsWithStock = product => product.hasStock;

const selectFirstFourProductsWithStock = products =>
  products.filter(byProductsWithStock).slice(0, 4);

const mapStateToProps = ({ products: { all } }) => ({
  highlightedProducts: all ? selectFirstFourProductsWithStock(all) : []
});

const HighlightedProductsContainer = connect(mapStateToProps, null)(HighlightedProducts);

export default HighlightedProductsContainer;
