import { connect } from 'react-redux';
import NavBar from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  totalProducts: shoppingCart.all.length
});

const NavBarContainer = connect(mapStateToProps, null)(NavBar);

export default NavBarContainer;
