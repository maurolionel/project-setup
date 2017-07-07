import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../scenes/Home';
import Products from '../../scenes/Products';
// import restrict from '../../components/Security/Auth';

//import FullScreenLayout from '../../components/commons/FullScreen';

const App = ({ username }) => (
  <div className="FullScreenLayout">
    <p>{ username }</p>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/products" component={Products} />
      {/*<Route exact path="/dashboard" component={restrict(Dashboard)} />*/}
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
