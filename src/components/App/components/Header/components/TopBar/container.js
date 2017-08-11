import { connect } from 'react-redux';
import TopBar from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  productsInCartQuantity: shoppingCart.all.length
});

const TopBarContainer = connect(
  mapStateToProps,
  null
)(TopBar);

export default TopBarContainer;
