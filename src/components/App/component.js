import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Header from './components/Header';

// scenes
import Home from '../../scenes/Home';
import Products from '../../scenes/Products';
import HotSales from '../../scenes/HotSales';
import Support from '../../scenes/Support';
import Contact from '../../scenes/Contact';
import NotFound from '../../scenes/NotFound';
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
      <Route exact path="/ofertas" component={HotSales} />
      <Route exact path="/soporte" component={Support} />
      <Route exact path="/contacto" component={Contact} />
      {/* <Route exact path="/dashboard" component={restrict(Dashboard)} /> */}
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </StyledApp>
);

export default App;
