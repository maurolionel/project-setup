import { connect } from 'react-redux';
import Aside from './component';
import { setVisibilityFilter } from '../../services/products/actions';

const mapStateToProps = ({ categories }) => ({
  categories: categories.all
});

const mapDispatchToProps = dispatch => ({
  onSelectVisibilityFilter: categoryId => dispatch(setVisibilityFilter({ categoryId }))
});

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside);

export default AsideContainer;
