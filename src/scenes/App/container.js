import { connect } from 'react-redux';
import App from './component';
import { setUser } from './actions';

const mapStateToProps = state => ({
  username: state.user.username || 'NN'
});

const mapDispatchToProps = dispatch => ({
  onUserRegister: username => dispatch(setUser({ username }))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
