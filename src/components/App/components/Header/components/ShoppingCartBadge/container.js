import { connect } from 'react-redux';
import ShoppingCartBadge from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  quantity: shoppingCart.all.length
});

const ShoppingCartBadgeContainer = connect(
  mapStateToProps,
  null
)(ShoppingCartBadge);

export default ShoppingCartBadgeContainer;
