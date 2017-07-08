import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from '../../scenes/Home';
import Products from '../../scenes/Products';
// import restrict from '../../components/Security/Auth';

// import FullScreenLayout from '../../components/commons/FullScreen';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserRegister(this.userInput.value);
  }

  render() {
    return (
      <div className="FullScreenLayout">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={ref => (this.userInput = ref)} />
        </form>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={Products} />
          {/* <Route exact path="/dashboard" component={restrict(Dashboard)} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  onUserRegister: PropTypes.func.isRequired
};

export default App;