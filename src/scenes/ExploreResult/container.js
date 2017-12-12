import { connect } from 'react-redux';
import ExploreResult from './component';

const mapStateToProps = ({ search: { query } }) => ({
  query
});

const ExploreResultContainer = connect(mapStateToProps, null)(ExploreResult);

export default ExploreResultContainer;
