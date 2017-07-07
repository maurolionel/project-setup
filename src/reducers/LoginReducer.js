export default function loginReducer (state = [], auth) {
  switch (auth.type) {
    case 'AUTH_REQUEST':
      return [...state, Object.assign({}, auth.login)];
    default:
      return state;
  }
}
