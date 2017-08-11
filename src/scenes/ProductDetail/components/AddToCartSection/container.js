import { connect } from 'react-redux';
import AddToCartSection from './component';
import { shoppingCartIncreaseThunk } from '../../../../services/shoppingCart/thunks';

const mapDispatchToProps = dispatch => ({
  onSubmitQuantity: (productId, quantity) => dispatch(shoppingCartIncreaseThunk(productId, quantity))
});

const AddToCartSectionContainer = connect(
  null,
  mapDispatchToProps
)(AddToCartSection);

export default AddToCartSectionContainer;
