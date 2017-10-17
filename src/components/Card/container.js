import { connect } from 'react-redux';
import Card from './component';
import config from '../../config';

const getCategoryName = (categories, id) => categories.find(c => id === c.id).name;

const mapStateToProps = (state, { product }) => ({
  productUrl: `/productos/${getCategoryName(state.categories.all, product.categoryId)}/${product.id}`,
  imagePath: `${config.api.path}images/${product.categoryId}/${product.id}.jpg`
});

const CardContainer = connect(mapStateToProps, null)(Card);

export default CardContainer;
