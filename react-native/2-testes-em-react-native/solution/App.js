import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { theme } from './src/theme';
import Header from './src/components/Header';
import ButtonToggleModal from './src/components/ButtonToggleModal';
import ModalAddBill from './src/components/ModalAddBill';
import Bill from './src/components/Bill';

class App extends Component {
  state = {
    bills: [],
    error: null,
    modalOpen: false,
  };

  addBill = bill => {
    const { bills } = this.state;
    if (!bill.label || !bill.dueDay) return;
    const newBills = [...bills, bill];
    this.setState({ bills: newBills, modalOpen: false });
  }

  render() {
    const { bills, modalOpen } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <ButtonToggleModal toggleModal={() => this.setState({ modalOpen: true })} />
        <ScrollView>
          {bills.map((bill, index) => (
            <Bill
              key={index.toString()}
              bill={bill}
            />
          ))}
        </ScrollView>
        <ModalAddBill
          addBill={this.addBill}
          modalVisible={modalOpen}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey.light,
    flex: 1,
  },
});
