import store from './store';

test('store should match snapshot', () => {
  const state = store.getState();
  expect(state).toMatchSnapshot();
});
