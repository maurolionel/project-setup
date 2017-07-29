import { connect } from 'react-redux';
import Products from './component';
import { getProducts } from '../../services/products/actions';

const mapStateToProps = state => ({
  products: state.products.all
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(getProducts())
});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
