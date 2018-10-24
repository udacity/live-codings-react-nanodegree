import React, { Component } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class ModalAddBill extends Component {
  state = {
    bill: {},
  };

  render() {
    const { bill } = this.state;
    const { addBill, modalVisible } = this.props;

    return (
      <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <View style={modalStyles.view}>
          <TextInput
            onChangeText={label => this.setState({ bill: { ...bill, label } })}
            placeholder="Bill description (rent, credit card, ...)"
            style={{
              height: 50,
              width: '100%'
            }}
          />
          <TextInput
            keyboard="numeric"
            onChangeText={dueDay => this.setState({ bill: { ...bill, dueDay } })}
            placeholder="Bill due day (08, ...)"
            style={{
              height: 50,
              width: '100%'
            }}
          />
          <TextInput
            keyboard="numeric"
            onChangeText={amount => this.setState({ bill: { ...bill, amount } })}
            placeholder="Bill amount (1500, ...)"
            style={{
              height: 50,
              width: '100%'
            }}
          />
          <Button
            onPress={() => addBill(bill)}
            title="Add bill"
          />
        </View>
      </Modal>
    );
  }
}

ModalAddBill.propTypes = {
  addBill: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const modalStyles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ModalAddBill;