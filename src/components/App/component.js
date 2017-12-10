import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

// layout
import Header from './components/Header';
import Footer from './components/Footer';
import SceneWrapper from '../SceneWrapper';
import Breadcrumb from '../Breadcrumb';

// scenes
import Categories from '../../scenes/Categories';
import Contact from '../../scenes/Contact';
import FAQs from '../../scenes/FAQs';
import Home from '../../scenes/Home';
import NotFound from '../../scenes/NotFound';
import Products from '../../scenes/Products';
import ProductDetail from '../../scenes/ProductDetail';
import ShoppingCart from '../../scenes/ShoppingCart';
import SignIn from '../../scenes/SignIn';
import SignUp from '../../scenes/SignUp';
import Support from '../../scenes/Support';

// modals
import ModalSchedules from '../ModalSchedules';
import ModalShippings from '../ModalShippings';
import ModalPayment from '../ModalPayment';
import ModalPurchase from '../ModalPurchase';

// assets
import '../../assets/images/apple-icon-180x180.png';
import '../../assets/images/favicon-16x16.png';
import '../../assets/images/favicon-32x32.png';
import '../../assets/images/favicon-96x96.png';
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
  * {
    min-height: 0;
    min-width: 0;
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

class App extends Component {
  state = {
    headerHeight: 0
  }

  handleHeaderLayout = headerHeight => this.setState({ headerHeight });

  render() {
    return (
      <StyledApp style={{ paddingTop: this.state.headerHeight }}>
        <Header onHeaderLayout={this.handleHeaderLayout} />
        <Main>
          <SceneWrapper>
            <Breadcrumb />
            <Switch>
              {/* TopBar */}
              <Route exact path="/carrito" component={ShoppingCart} />
              <Route exact path="/ingresar" component={SignIn} />
              <Route exact path="/registrarse" component={SignUp} />

              {/* NavBar */}
              <Route exact path="/productos" component={Categories} />
              <Route exact path="/productos/:categoryName" component={Products} />
              <Route exact path="/productos/:categoryName/:productId" component={ProductDetail} />
              <Route exact path="/ofertas" component={Products} />
              <Route exact path="/soporte" component={Support} />
              <Route exact path="/contacto" component={Contact} />

              <Route exact path="/ayuda" component={FAQs} />

              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </SceneWrapper>
        </Main>
        <Footer />
        <ModalSchedules />
        <ModalShippings />
        <ModalPayment />
        <ModalPurchase />
      </StyledApp>
    );
  }
}

export default App;
