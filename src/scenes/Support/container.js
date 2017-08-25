import { connect } from 'react-redux';
import Support from './component';

const mapStateToProps = ({ brands }) => ({
  brands: brands.all
});

const SupportContainer = connect(
  mapStateToProps,
  null
)(Support);

export default SupportContainer;
