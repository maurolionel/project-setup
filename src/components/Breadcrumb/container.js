import { connect } from 'react-redux';
import Breadcrumb from './component';

const mapStateToProps = ({ routing: { location: { pathname } } }) => ({
  pathname
});

const BreadcrumbContainer = connect(mapStateToProps, null)(Breadcrumb);

export default BreadcrumbContainer;
