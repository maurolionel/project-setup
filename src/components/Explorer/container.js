import { connect } from 'react-redux';
import Explorer from './component';
import { exploreProducts } from '../../scenes/ExploreResult/thunks';

const mapDispatchToProps = dispatch => ({
  onSubmit: query => dispatch(exploreProducts(query))
});

const ExplorerContainer = connect(null, mapDispatchToProps)(Explorer);

export default ExplorerContainer;
