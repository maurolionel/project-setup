import { connect } from 'react-redux';
import ProductsFilteredByCategory from './component';

const mapStateToProps = state => ({
  categories: state.categories.all,
  products: state.products.all
});

const ProductsFilteredByCategoryContainer = connect(
  mapStateToProps,
  null
)(ProductsFilteredByCategory);

export default ProductsFilteredByCategoryContainer;
