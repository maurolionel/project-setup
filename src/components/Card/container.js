import { connect } from 'react-redux';
import Card from './component';

const getCategoryName = (categories, id) => categories.find(c => id === c.id).name;

const mapStateToProps = (state, { product }) => ({
  productUrl: `/productos/${getCategoryName(state.categories.all, product.categoryId)}/${product.id}`
});

const CardContainer = connect(mapStateToProps, null)(Card);

export default CardContainer;
