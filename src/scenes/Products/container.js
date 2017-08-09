import { connect } from 'react-redux';
import Products from './component';

const mapStateToProps = state => ({
  categories: state.categories.all,
  products: state.products.all
});

const ProductsContainer = connect(
  mapStateToProps,
  null
)(Products);

export default ProductsContainer;
