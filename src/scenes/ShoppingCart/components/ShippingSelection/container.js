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
  onSubmit: purchase => dispatch(saveShipping({ shipping: purchase }))
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
