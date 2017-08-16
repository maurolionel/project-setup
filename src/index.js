import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import registerServiceWorker from './services/registerServiceWorker';
import colors from './styles/Colors';
import configureStore, { history } from './services/store';
import ScrollToTop from './components/ScrollToTop';
import App from './components/App';
import { getCategories } from './services/categories/actions';
import { getProducts } from './services/products/actions';
import { getBrands } from './services/brands/actions';

const store = configureStore;
store.dispatch(getCategories());
store.dispatch(getProducts());
store.dispatch(getBrands());

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <ThemeProvider theme={colors}>
    <Provider store={store}>
      <IntlProvider locale="es-419">
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <Route path="/" component={App} />
          </ScrollToTop>
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
