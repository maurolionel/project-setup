import { connect } from 'react-redux';
import Explorer from './component';
import { searchQuery } from '../../services/search/thunks';

const mapDispatchToProps = dispatch => ({
  onSubmit: query => dispatch(searchQuery(query))
});

const ExplorerContainer = connect(null, mapDispatchToProps)(Explorer);

export default ExplorerContainer;
