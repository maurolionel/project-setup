import { connect } from 'react-redux';
import Products from './component';

const mapStateToProps = ({ products, categories }) => ({
  categories: categories.all,
  products: products.all,
  visibilityFilter: products.visibilityFilter
});

const ProductsContainer = connect(mapStateToProps, null)(Products);

export default ProductsContainer;
