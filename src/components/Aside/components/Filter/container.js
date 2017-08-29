import { connect } from 'react-redux';
import Filter from './component';

const mapStateToProps = ({ products: { visibilityFilter } }) => ({
  visibilityFilter
});

const FilterContainer = connect(mapStateToProps, null)(Filter);

export default FilterContainer;
