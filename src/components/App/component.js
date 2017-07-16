import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

// layout
import Header from './components/Header';
import Footer from './components/Footer';

// scenes
import Contact from '../../scenes/Contact';
import Home from '../../scenes/Home';
import HotSales from '../../scenes/HotSales';
import NotFound from '../../scenes/NotFound';
import Products from '../../scenes/Products';
import Schedules from '../../scenes/Schedules';
import Shippings from '../../scenes/Shippings';
import ShoppingCart from '../../scenes/ShoppingCart';
import SignIn from '../../scenes/SignIn';
import SignUp from '../../scenes/SignUp';
import Support from '../../scenes/Support';

// import restrict from '../../components/Security/Auth';
// <Route exact path="/dashboard" component={restrict(Dashboard)} />

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}
  *, *:before, *:after { box-sizing: border-box; }
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
  img {
    display: block;
    max-width: 100%;
    height: auto;
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

        {/* TopBar */}
        <Route exact path="/horarios" component={Schedules} />
        <Route exact path="/envios" component={Shippings} />
        <Route exact path="/carrito" component={ShoppingCart} />
        <Route exact path="/ingresar" component={SignIn} />
        <Route exact path="/registrarse" component={SignUp} />

        {/* NavBar */}
        <Route exact path="/productos" component={Products} />
        <Route exact path="/ofertas" component={HotSales} />
        <Route exact path="/soporte" component={Support} />
        <Route exact path="/contacto" component={Contact} />

        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Main>
    <Footer />
  </StyledApp>
);

export default App;
