import { connect } from 'react-redux';
import Support from './component';
import { getBrands } from '../../../../services/brands/actions';
import { setBrand } from '../../../../services/support/actions';

const mapStateToProps = ({ brands, support }) => ({
  brands: brands.all,
  selectedBrand: support.brandId
});

const mapDispatchToProps = dispatch => ({
  onGetBrands: () => dispatch(getBrands()),
  onSelectBrand: brandId => dispatch(setBrand({ brandId }))
});

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);

export default SupportContainer;

