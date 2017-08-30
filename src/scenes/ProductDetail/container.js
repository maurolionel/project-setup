import { connect } from 'react-redux';
import ProductDetails from './component';
import config from '../../config';

const mapStateToProps = state => ({
  products: state.products.all,
  staticPath: `${config.api.path}images/`
});

const ProductDetailsContainer = connect(mapStateToProps, null)(ProductDetails);

export default ProductDetailsContainer;
