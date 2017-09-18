import { connect } from 'react-redux';
import ProductResult from './component';

const mapStateToProps = ({ support }) => ({
  instructives: support.instructives
});

const ProductResultContainer = connect(mapStateToProps, null)(ProductResult);

export default ProductResultContainer;
