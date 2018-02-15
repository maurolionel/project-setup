import { connect } from 'react-redux';
import ShippingSelection from './component';
import { getProvinces, getProvincesMoto, getLocationsForProvince, getCorreoBranchOffices } from '../../../../services/places/actions';
import { getShippingMethods } from '../../../../services/shippings/thunks';
import { setInputValue } from '../../../../services/purchase/actions';

const mapStateToProps = ({
  places: { correoBranchOffices, provinces, locations, isLoadingProvinces, isLoadingLocations },
  shippings,
  purchase
}) => ({
  correoBranchOffices,
  provinces,
  locations,
  data: purchase.data,
  isLoadingLocations,
  isLoadingProvinces,
  shippingForms: shippings.forms,
  shippingMethods: shippings.methods,
  shippingOptions: shippings.options
});

const mapDispatchToProps = dispatch => ({
  getCorreoBranchOffices: provinceId => dispatch(getCorreoBranchOffices(provinceId)),
  getAllProvinces: () => dispatch(getProvinces()),
  getLocationsForProvince: provinceId => dispatch(getLocationsForProvince(provinceId)),
  getProvincesForMoto: () => dispatch(getProvincesMoto()),
  getShippingMethods: locationId => dispatch(getShippingMethods(locationId)),
  onInputChange: (type, value) => dispatch(setInputValue({ type, value }))
});

const ShippingSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingSelection);

export default ShippingSelectionContainer;
