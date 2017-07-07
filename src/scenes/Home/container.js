import { connect } from 'react-redux';
import Home from './component';

const mapStateToProps = state => ({
  username: state.username
});

const HomeContainer = connect(
  mapStateToProps,
  null
)(Home);

export default HomeContainer;
