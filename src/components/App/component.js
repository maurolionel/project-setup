import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

// layout
import Header from './components/Header';
import Footer from './components/Footer';

// scenes
import Home from '../../scenes/Home';
import Products from '../../scenes/Products';
import HotSales from '../../scenes/HotSales';
import Support from '../../scenes/Support';
import Contact from '../../scenes/Contact';
import NotFound from '../../scenes/NotFound';
// import restrict from '../../components/Security/Auth';

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}
  html { height: 100%; }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
/* eslint-enable no-unused-expressions */

const StyledApp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const Main = styled.main`
  flex: 1;
`;

const App = () => (
  <StyledApp>
    <Header />
    <Main>
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
    </Main>
    <Footer />
  </StyledApp>
);

export default App;
