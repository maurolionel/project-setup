import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  totalProducts: shoppingCart.all.length
});

const NavBarContainer = withRouter(connect(mapStateToProps, null)(NavBar));

export default NavBarContainer;
