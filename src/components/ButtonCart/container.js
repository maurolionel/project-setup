import { connect } from 'react-redux';
import ButtonCart from './component';

const mapStateToProps = ({ shoppingCart: { all } }, ownProps) => {
  const isInCart = all.some(p => ownProps.productId === p.id);
  const quantity = isInCart ? all.find(p => ownProps.productId === p.id).quantity : 0;
  return {
    isNotInCart: !isInCart,
    quantity
  };
};

const ButtonCartContainer = connect(mapStateToProps, null)(ButtonCart);

export default ButtonCartContainer;
