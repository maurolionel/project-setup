import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Explorer from './component';
import { replaceSpaceWithMiddleDash } from '../../services/utils';

const mapDispatchToProps = dispatch => ({
  onSubmit: query => dispatch(push(`/buscar/${replaceSpaceWithMiddleDash(query)}`))
});

const ExplorerContainer = connect(null, mapDispatchToProps)(Explorer);

export default ExplorerContainer;
