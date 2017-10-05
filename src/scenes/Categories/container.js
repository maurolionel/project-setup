import { connect } from 'react-redux';
import Categories from './component';
import { getCategories } from '../../services/categories/actions';

const mapStateToProps = ({ categories }) => ({
  categories: categories.all
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;
