import { connect } from 'react-redux';
import Support from './component';
import { getBrands } from '../../../../services/brands/actions';
import { setBrandWithName, getInstructives } from '../../../../services/support/thunks';

const normalizeByName = (prev, next) => [...prev, next.name];

const mapStateToProps = ({ brands, support }) => ({
  brands: brands.all.reduce(normalizeByName, []),
  selectedBrand: support.brandId
});

const mapDispatchToProps = dispatch => ({
  onGetBrands: () => dispatch(getBrands()),
  onSelectBrand: brandName => dispatch(setBrandWithName(brandName)),
  onGetInstructives: query => dispatch(getInstructives(query))
});

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);

export default SupportContainer;

