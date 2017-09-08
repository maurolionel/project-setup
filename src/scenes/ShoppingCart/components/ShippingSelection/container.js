import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getLocations } from '../../../../services/places/actions';
import { getShippingMethods } from '../../../../services/shippingMethods/actions';
import { saveShipping } from '../../../../services/purchase/actions';

const mapStateToProps = ({ places: { provinces, locations }, shippingMethods }) => ({
  provinces,
  locations,
  shippingForms: shippingMethods.forms,
  shippingMethods: shippingMethods.methods
});

const mapDispatchToProps = dispatch => ({
  onGetProvinces: () => dispatch(getProvinces()),
  onGetLocations: () => dispatch(getLocations()),
  onGetShippingMethods: () => dispatch(getShippingMethods()),
  onSubmit: shipping => dispatch(saveShipping({ shipping }))
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
