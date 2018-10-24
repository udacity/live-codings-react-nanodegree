import React from 'react';
import { create } from 'react-test-renderer';
import ModalAddBill from '.';

describe('[Component] ModalAddBill', () => {
  const props = {
    addBill: jest.fn(),
    modalVisible: false,
  };
  const tree = create(<ModalAddBill {...props} />);

  it('matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches initial state', () => {
    expect(tree.root.instance.state).toEqual({ bill: {} });
  });

  it('calls addBill prop', () => {
    tree.root.props.addBill();
    expect(props.addBill).toHaveBeenCalled();
  });
});
