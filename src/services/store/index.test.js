import configureStore from './';

describe('Store Valid Test', () => {
  const store = configureStore;

  test('Store should be a valid object', () => {
    expect(typeof store).toBe('object');
  });

  test('Store must have a dispatch function', () => {
    expect(typeof store.dispatch).toBe('function');
  });

  test('Store must have a subscribe function', () => {
    expect(typeof store.subscribe).toBe('function');
  });
});
