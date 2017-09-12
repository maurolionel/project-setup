import { connect } from 'react-redux';
import ButtonCart from './component';

const mapStateToProps = (state, ownProps) => ({
  isInCart: state.products.all.some(p => p.id === ownProps.productId)
});

const ButtonCartContainer = connect(mapStateToProps, null)(ButtonCart);

export default ButtonCartContainer;
