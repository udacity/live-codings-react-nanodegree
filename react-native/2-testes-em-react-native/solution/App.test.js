import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('[Component] App', () => {
  const tree = create(<App />);

  it('matches default snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches initial state', () => {
    expect(tree.root.instance.state).toEqual({ bills: [], error: null, modalOpen: false });
  });
});
