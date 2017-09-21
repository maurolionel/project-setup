import { connect } from 'react-redux';
import Support from './component';
import { getBrands } from '../../../../services/brands/actions';
import { setBrandWithName, getInstructives } from '../../../../services/support/thunks';

const normalizeByName = (prev, next) => [...prev, next.name];

const mapStateToProps = ({ brands, support }) => ({
  brands: brands.all,
  selectedBrand: support.brandId,
  productResults: support.productResults
});

const mapDispatchToProps = dispatch => ({
  onGetBrands: () => dispatch(getBrands()),
  onSelectBrand: brandName => dispatch(setBrandWithName(brandName)),
  onGetInstructives: brand => dispatch(getInstructives(brand.id))
});

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);

export default SupportContainer;

