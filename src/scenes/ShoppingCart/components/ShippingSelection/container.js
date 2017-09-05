import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getLocations } from '../../../../services/places/actions';
import { getShippingMethods } from '../../../../services/shippingMethods/actions';

const mapStateToProps = ({ places: { provinces, locations }, shippingMethods }) => ({
  provinces,
  locations,
  shippingMethods: shippingMethods.all
});

const mapDispatchToProps = dispatch => ({
  onGetProvinces: () => dispatch(getProvinces()),
  onGetLocations: () => dispatch(getLocations()),
  onGetShippingMethods: () => dispatch(getShippingMethods())
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
