import { connect } from 'react-redux';
import ButtonCart from './component';

const mapStateToProps = ({ shoppingCart: { all } }, ownProps) => {
  const product = all.find(p => ownProps.productId === p.id);
  const isInCart = Boolean(product);
  return {
    isNotInCart: !isInCart,
    quantity: isInCart && product.quantity
  };
};

const ButtonCartContainer = connect(mapStateToProps, null)(ButtonCart);

export default ButtonCartContainer;
