import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Header from './components/Header';
import Home from '../../scenes/Home';
import Products from '../../scenes/Products';
// import restrict from '../../components/Security/Auth';

/* eslint-disable no-unused-expressions */
injectGlobal`${normalize()}`;
/* eslint-enable no-unused-expressions */

const StyledApp = styled.main`
  font-family: Arial, sans-serif;
`;

const App = () => (
  <StyledApp>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/productos" component={Products} />
      {/* <Route exact path="/dashboard" component={restrict(Dashboard)} /> */}
      <Route exact path="/" component={Home} />
    </Switch>
  </StyledApp>
);

export default App;
