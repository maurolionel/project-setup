import { connect } from 'react-redux';
import Products from './component';
import { getCategories } from '../../services/categories/actions';
import { getProductsOfCategory } from '../../services/products/thunks';

const mapStateToProps = ({ products, categories }, ownProps) => {
  const { match } = ownProps;
  let results = products;
  if (match.url === '/ofertas') {
    results = products.all.filter(p => p.isOfferMode);
  } else {
    const categoryId = categories.all && categories.all.find(
      c => match.params.categoryName === c.name).id;
    results = products.all.filter(p => p.categoryId === categoryId);
  }

  return {
    categories: categories.all,
    products: results,
    isLoading: products.isFetching,
    visibilityFilter: products.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getProducts: categoryName => dispatch(getProductsOfCategory(categoryName))
});

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;
