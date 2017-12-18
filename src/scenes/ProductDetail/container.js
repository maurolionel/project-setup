import { connect } from 'react-redux';
import ProductDetails from './component';
import { convertStringToNumber } from '../../services/utils';
import { getProductDetail } from './thunks';

const mapStateToProps = ({ productDetail }) => ({
  product: productDetail.data,
  isLoading: productDetail.isLoading
});

const mapDispatchToProps = dispatch => ({
  getProductDetail: productId => dispatch(getProductDetail(productId)),
  deleteProductDetail: () => dispatch({ type: 'DELETE' })
});

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;
