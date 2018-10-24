import React from 'react';
import renderer from 'react-test-renderer';

import Header from './'

test('[Component] Header matches snapshots', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
