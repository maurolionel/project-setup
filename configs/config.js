/* @flow */
/* eslint-disable max-len*/
const global = {
  tittle: 'React',
  version: '1.0',
  develop: 1
};

const local = Object.assign({}, global, {
  api_path: '//path.a.tu.api',
  clientProtocol: 'http',
  clientDomain: 'localhost',
  clientPort: '8080'
});

const development = Object.assign({}, global, {
  api_path: '//path.a.tu.api',
});

const staging = Object.assign({}, global, {
  api_path: '//path.a.tu.api',
});

const production = Object.assign({}, global, {
  api_path: '//path.a.tu.api',
  develop: 0
});

const config = {
  local,
  development,
  staging,
  production
};

export default config[process.env.NODE_ENV];
