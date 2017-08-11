import { connect } from 'react-redux';
import Card from './component';
import { shoppingCartIncreaseThunk } from '../../services/shoppingCart/thunks';

const mapDispatchToProps = dispatch => ({
  onAddToCart: productId => dispatch(shoppingCartIncreaseThunk(productId, 1))
});

const CardContainer = connect(
  null,
  mapDispatchToProps
)(Card);

export default CardContainer;
