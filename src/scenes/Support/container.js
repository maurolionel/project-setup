import { connect } from 'react-redux';
import Support from './component';

const mapStateToProps = ({ support }) => ({
  isShowingResults: false
});

const SupportContainer = connect(mapStateToProps, null)(Support);

export default SupportContainer;

