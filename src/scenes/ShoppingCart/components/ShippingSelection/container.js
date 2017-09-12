import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getLocations } from '../../../../services/places/actions';
import { getShippingMethods } from '../../../../services/shippings/thunks';
import { saveShipping } from '../../../../services/purchase/actions';

const mapStateToProps = ({ places: { provinces, locations }, shippings }) => ({
  provinces,
  locations,
  shippingForms: shippings.forms,
  shippingMethods: shippings.methods
});

const mapDispatchToProps = dispatch => ({
  onGetProvinces: () => dispatch(getProvinces()),
  onGetLocations: () => dispatch(getLocations()),
  onGetShippingMethods: locationId => dispatch(getShippingMethods(locationId)),
  onSubmit: shipping => dispatch(saveShipping({ shipping }))
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
