import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '../../theme';

const Bill = ({ bill, payBill }) => (
  <View style={billStyles.view}>
    <View style={billStyles.inlineGroup}>
      <Text style={billStyles.label}>{bill.label}</Text>
      <Text>
        {`Due on  ${bill.dueDay}`}
      </Text>
    </View>
    {payBill && (
      <TouchableOpacity
        onPress={() => payBill(bill)}
        style={billStyles.payBill}
      >
        <Text>Pay</Text>
      </TouchableOpacity>
    )}
  </View>
);

Bill.propTypes = {
  bill: PropTypes.object.isRequired,
  payBill: PropTypes.func,
};

Bill.propTypes = {
  payBill: () => null,
};

const billStyles = StyleSheet.create({
  view: {
    display: 'flex',
    padding: theme.spaces[1],
    width: '100%',
  },
  inlineGroup: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: theme.fontSizes.headerTwo,
  },
  payBill: {
    backgroundColor: theme.colors.accent.default,
    padding: theme.spaces[1],
    width: 35,
  },
});

export default Bill;
