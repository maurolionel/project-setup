import { connect } from 'react-redux';
import AddToCartSection from './component';
import { shoppingCartIncreaseThunk } from '../../../../services/shoppingCart/thunks';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmitQuantity: quantity => dispatch(shoppingCartIncreaseThunk(ownProps.product.id, quantity))
});

const AddToCartSectionContainer = connect(null, mapDispatchToProps)(AddToCartSection);

export default AddToCartSectionContainer;
