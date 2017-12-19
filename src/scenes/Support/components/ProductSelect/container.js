import { connect } from 'react-redux';
import Support from './component';
import { getBrands } from '../../../../services/brands/actions';
import { getGuides, selectGuide } from '../../../../services/support/thunks';

const mapStateToProps = ({ brands, support }) => ({
  brands: brands.all,
  guides: support.guides,
  isLoadingGuides: support.isLoadingGuides
});

const mapDispatchToProps = dispatch => ({
  onGetBrands: () => dispatch(getBrands()),
  onGetGuides: brand => dispatch(getGuides(brand.id)),
  onSelectGuideResult: result => dispatch(selectGuide(result.id))
});

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Support);

export default SupportContainer;

