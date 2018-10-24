import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '../../theme';

const ButtonToggleModal = ({ toggleModal }) => (
  <TouchableOpacity
    onPress={toggleModal}
    style={buttonStyles.container}
  >
    <Text style={buttonStyles.text}>
      Create new bill
    </Text>
  </TouchableOpacity>
);

ButtonToggleModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.light,
    padding: theme.spaces[1],
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.headerTwo,
    fontWeight: 'bold',
  },
});

export default ButtonToggleModal;
