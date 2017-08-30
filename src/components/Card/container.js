import { connect } from 'react-redux';
import Card from './component';
import { shoppingCartIncreaseThunk } from '../../services/shoppingCart/thunks';
import config from '../../config';

const mapStateToProps = () => ({
  staticPath: `${config.api.path}images/`
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: productId => dispatch(shoppingCartIncreaseThunk(productId, 1))
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
