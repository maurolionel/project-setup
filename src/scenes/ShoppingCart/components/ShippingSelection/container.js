import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getLocations } from '../../../../services/places/actions';
import { getShippingMethods } from '../../../../services/shippings/thunks';
import { setInputValue } from '../../../../services/purchase/actions';

const mapStateToProps = ({ places: { provinces, locations }, shippings, purchase }) => ({
  provinces,
  locations,
  data: purchase.data,
  shippingForms: shippings.forms,
  shippingMethods: shippings.methods
});

const mapDispatchToProps = dispatch => ({
  onGetProvinces: () => dispatch(getProvinces()),
  onGetLocations: provinceId => dispatch(getLocations(provinceId)),
  onGetShippingMethods: locationId => dispatch(getShippingMethods(locationId)),
  onInputChange: (type, value) => dispatch(setInputValue({ type, value }))
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
