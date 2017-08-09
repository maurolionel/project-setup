import { connect } from 'react-redux';
import AddToCartSection from './component';
import { shoppingCartAddThunk } from '../../../../services/shoppingCart/thunks';

const mapDispatchToProps = dispatch => ({
  onAddProductToCart: (productId, quantity) => dispatch(shoppingCartAddThunk(productId, quantity))
});

const AddToCartSectionContainer = connect(
  null,
  mapDispatchToProps
)(AddToCartSection);

export default AddToCartSectionContainer;
