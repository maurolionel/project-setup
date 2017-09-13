import { connect } from 'react-redux';
import Card from './component';
import { shoppingCartIncreaseThunk } from '../../services/shoppingCart/thunks';
import config from '../../config';

const mapStateToProps = (state, { product }) => ({
  productUrl: `/productos/${product.id}`,
  imagePath: `${config.api.path}images/${product.categoryId}/${product.id}.jpg`
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddToCart: () => dispatch(shoppingCartIncreaseThunk(ownProps.product.id, 1))
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
