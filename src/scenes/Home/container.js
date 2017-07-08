import { connect } from 'react-redux';
import Home from './component';

const mapStateToProps = state => ({
  username: state.user.username || 'NN'
});

const HomeContainer = connect(
  mapStateToProps,
  null
)(Home);

export default HomeContainer;
