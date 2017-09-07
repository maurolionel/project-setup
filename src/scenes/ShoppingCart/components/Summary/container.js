import { connect } from 'react-redux';
import Summary from './component';
import { SHIPPING_OPTION, UNDEFINED_VALUE } from '../../../../services/shippingMethods/constants';

const getShippingFormName = (key, forms) => forms.find(f => f.id === key).name;
const getShippingMethodName = (key, methods) => methods.find(m => m.id === key).name;
const getProvinceName = (key, provinces) => provinces.find(p => p.id === key).name;
const getLocationName = (key, locations) => locations.find(l => l.id === key).name;

const formatShippingData = (data, state) => ({
  'Forma de entrega': getShippingFormName(data.shippingForm, state.shippingMethods.forms),
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
  'Método de envío': getShippingMethodName(data.shippingMethod, state.shippingMethods.methods)
});

const mapStateToProps = (state) => {
  const { shippingForm } = state.purchase.shipping;
  if (shippingForm === SHIPPING_OPTION) {
    const formattedData = formatShippingData(state.purchase.shipping, state);
    const shippingArray = Object.entries(formattedData);
    return {
      products: state.shoppingCart.all,
      shipping: shippingArray
    };
  }
  return {
    products: state.shoppingCart.all,
    shipping: [
      ['Forma de entrega', getShippingFormName(shippingForm, state.shippingMethods.forms)]
    ]
  };
};

const SummaryContainer = connect(mapStateToProps, null)(Summary);

export default SummaryContainer;
