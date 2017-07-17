import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import registerServiceWorker from './services/registerServiceWorker';
import colors from './styles/Colors';
import configureStore, { history } from './services/store';
import ScrollToTop from './components/ScrollToTop';
import App from './components/App';


const store = configureStore;

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <ThemeProvider theme={colors}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <Route path="/" component={App} />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
