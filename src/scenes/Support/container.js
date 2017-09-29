import { connect } from 'react-redux';
import Support from './component';

const mapStateToProps = ({ support }) => ({
  isShowingResults: Boolean(support.selectedModelGuides.length)
});

const SupportContainer = connect(mapStateToProps, null)(Support);

export default SupportContainer;

