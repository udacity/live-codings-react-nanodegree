import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../theme';

const Header = () => (
  <View style={headerStyles.view}>
    <Text style={headerStyles.text}>My bills</Text>
  </View>
);

const headerStyles = StyleSheet.create({
  view: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary.default,
    display: 'flex',
    height: 128,
    justifyContent: 'flex-end',
    padding: theme.spaces[2],
    width: '100%',
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.headerOne,
    fontWeight: 'bold',
    marginTop: theme.spaces[1],
  },
});

export default Header;
