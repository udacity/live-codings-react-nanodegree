import React from 'react';
import { create } from 'react-test-renderer';

import ButtonToggleModal from './';

describe('[Component] ButtonToggleModal', () => {
  const toggleModal = jest.fn();
  const tree = create(<ButtonToggleModal toggleModal={toggleModal} />);

  it('matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('calls toggleModal when pressed', () => {
    tree.root.props.toggleModal();
    expect(toggleModal).toHaveBeenCalled();
  });
});
