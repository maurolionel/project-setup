import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

// layout
import Header from './components/Header';
import Footer from './components/Footer';
import SceneWrapper from '../SceneWrapper';
import Breadcrumb from '../Breadcrumb';

// scenes
import Contact from '../../scenes/Contact';
import Home from '../../scenes/Home';
import HotSales from '../../scenes/HotSales';
import MyAccount from '../../scenes/MyAccount';
import NotFound from '../../scenes/NotFound';
import Products from '../../scenes/Products';
import ProductDetail from '../../scenes/ProductDetail';
import ShoppingCart from '../../scenes/ShoppingCart';
import SignIn from '../../scenes/SignIn';
import SignUp from '../../scenes/SignUp';
import Support from '../../scenes/Support';
import '../../assets/fonts/arial_rounded.ttf';
import '../../assets/fonts/OpenSans-Light.ttf';
import '../../assets/fonts/OpenSans-Regular.ttf';
import '../../assets/fonts/OpenSans-SemiBold.ttf';

// import restrict from '../../components/Security/Auth';
// <Route exact path="/dashboard" component={restrict(Dashboard)} />

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}
  @font-face {
    font-family: 'ArialRounded';
    font-weight: 400;
    src: url('src/assets/fonts/arial_rounded.ttf');
  }
  @font-face {
    font-family: 'OpenSans';
    font-weight: 300;
    src: url('src/assets/fonts/OpenSans-Light.ttf');
  }
  @font-face {
    font-family: 'OpenSans';
    font-weight: 400;
    src: url('src/assets/fonts/OpenSans-Regular.ttf');
  }
  @font-face {
    font-family: 'OpenSans';
    font-weight: 700;
    src: url('src/assets/fonts/OpenSans-SemiBold.ttf');
  }
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
  input {
    font-family: 'OpenSans', Arial, sans-serif;
    font-weight: 400;
  }
`;
/* eslint-enable no-unused-expressions */

const StyledApp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'OpenSans', Arial, sans-serif;
  font-weight: 400;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.whiteGray};
`;

const App = () => (
  <StyledApp>
    <Header />
    <Main>
      <SceneWrapper>
        <Route component={Breadcrumb} />
        <Switch>
          {/* TopBar */}
          <Route exact path="/carrito" component={ShoppingCart} />
          <Route exact path="/ingresar" component={SignIn} />
          <Route exact path="/registrarse" component={SignUp} />
          <Route exact path="/mi-cuenta" component={MyAccount} />

          {/* NavBar */}
          <Route exact path="/productos" component={Products} />
          <Route exact path="/productos/:productId" component={ProductDetail} />
          <Route exact path="/ofertas" component={HotSales} />
          <Route exact path="/soporte" component={Support} />
          <Route exact path="/contacto" component={Contact} />

          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </SceneWrapper>
    </Main>
    <Footer />
  </StyledApp>
);

export default App;
