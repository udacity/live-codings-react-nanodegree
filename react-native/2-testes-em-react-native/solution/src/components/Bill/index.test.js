import React from 'react';
import { create } from 'react-test-renderer';
import Bill from './';

describe('[Component] Bill', () => {
  const bill = {
    dueDay: '11',
    label: 'Rent',
  };

  it('matches snapshot', () => {
    const tree = create(<Bill bill={bill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
