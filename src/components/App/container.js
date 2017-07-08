import { connect } from 'react-redux';
import App from './component';
import { setUser } from './actions';

const mapDispatchToProps = dispatch => ({
  onUserRegister: username => dispatch(setUser({ username }))
});

const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
