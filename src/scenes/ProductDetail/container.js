import { connect } from 'react-redux';
import ProductDetails from './component';
import { getProductDetail } from './thunks';
import { resetProductDetail } from './actions';

const mapStateToProps = ({ productDetail }) => ({
  product: productDetail.data,
  isLoading: productDetail.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProductDetail: () => dispatch(getProductDetail(ownProps.match.params.productId)),
  resetProductDetail: () => dispatch(resetProductDetail())
});

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;
