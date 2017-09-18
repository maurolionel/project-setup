import { connect } from 'react-redux';
import Support from './component';

const mapStateToProps = ({ support }) => ({
  isShowingResults: Boolean(support.instructives.length)
});

const SupportContainer = connect(mapStateToProps, null)(Support);

export default SupportContainer;

