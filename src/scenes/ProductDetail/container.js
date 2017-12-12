import { connect } from 'react-redux';
import ProductDetails from './component';

const mapStateToProps = state => ({
  products: state.products.all
});

const ProductDetailsContainer = connect(mapStateToProps, null)(ProductDetails);

export default ProductDetailsContainer;
