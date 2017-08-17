import { connect } from 'react-redux';
import Support from './component';
import { getBrands } from '../../../../services/brands/actions';

const mapStateToProps = ({ brands }) => ({
  brands: brands.all
});

const mapDispatchToProps = dispatch => ({
  onGetBrands: () => dispatch(getBrands())
});

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);

export default SupportContainer;

