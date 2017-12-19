import { connect } from 'react-redux';
import ProductResult from './component';

const mapStateToProps = ({ support }) => ({
  guides: support.selectedModelGuides
});

const ProductResultContainer = connect(mapStateToProps)(ProductResult);

export default ProductResultContainer;
