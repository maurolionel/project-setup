import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getLocations } from '../../../../services/places/actions';

const mapStateToProps = ({ places: { provinces, locations } }) => ({
  provinces,
  locations
});

const mapDispatchToProps = dispatch => ({
  onGetProvinces: () => dispatch(getProvinces()),
  onGetLocations: () => dispatch(getLocations())
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
