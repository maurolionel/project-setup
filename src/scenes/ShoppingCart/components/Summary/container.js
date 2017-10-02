import { connect } from 'react-redux';
import Summary from './component';
import { setPurchase } from '../../../../services/purchase/thunks';
import { UNDEFINED_VALUE } from '../../../../services/shippings/constants';
import config from '../../../../config';

const staticPath = `${config.api.path}images/`;

const getShippingFormName = (key, forms) => forms.find(f => f.id === parseInt(key, 10)).name;
const getShippingMethodName = (key, methods) => methods.find(m => m.id === parseInt(key, 10)).name;
const getProvinceName = (key, provinces) => provinces.find(p => p.id === parseInt(key, 10)).name;
const getLocationName = (key, locations) => locations.find(l => l.id === parseInt(key, 10)).name;

const formatShippingData = (data, state) => ({
  'Forma de entrega': getShippingFormName(data.shippingForm, state.shippings.forms),
  Nombre: data.name,
  Apellido: data.surname,
  Email: data.email,
  Teléfono: data.tel,
  Provincia: getProvinceName(data.province, state.places.provinces),
  Localidad: getLocationName(data.location, state.places.locations),
  Calle: data.calle,
  Altura: data.altura,
  Piso: data.piso || UNDEFINED_VALUE,
  Departamento: data.departamento || UNDEFINED_VALUE,
  'Código postal': data.zipCode,
  'Método de envío': getShippingMethodName(data.shippingMethod, state.shippings.methods)
});

const mapStateToProps = (state) => {
  const { shippingForm } = state.purchase.data;
  let data = [
    ['Forma de entrega', getShippingFormName(shippingForm, state.shippings.forms)]
  ];
  if (shippingForm === '2') {
    const formattedData = formatShippingData(state.purchase.data, state);
    data = Object.entries(formattedData);
  }
  return {
    products: state.shoppingCart.all,
    data,
    staticPath,
    isSubmitEnabled: parseInt(state.purchase.paymentType, 10) > 0
  };
};

const mapDispatchToProps = dispatch => ({
  onPurchase: () => dispatch(setPurchase())
});

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default SummaryContainer;
