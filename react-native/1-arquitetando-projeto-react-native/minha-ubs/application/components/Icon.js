import React from 'react'
import { Image, StyleSheet } from 'react-native'

const icons = {
  unit: require('@images/unit-icon.png'),
  types: require('@images/types-icon.png')
}

const Icon = ({ name, tintColor }) => (
  <Image
    style={[styles.icon]}
    source={icons[name]}
  />
)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
})

export default Icon