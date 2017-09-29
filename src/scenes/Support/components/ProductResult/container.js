import { connect } from 'react-redux';
import ProductResult from './component';
import config from '../../../../config';

const mapStateToProps = ({ support }) => ({
  guides: support.selectedModelGuides,
  staticPath: `${config.api.path}images/`
});

const ProductResultContainer = connect(mapStateToProps, null)(ProductResult);

export default ProductResultContainer;
