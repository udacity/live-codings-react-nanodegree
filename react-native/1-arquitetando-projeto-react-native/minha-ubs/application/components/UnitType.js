import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import Text from '@components/Text'

const clean = (str, char) => (
  str.split(char).pop(-1).trim()
)

const format = (name) => {
  if(name.includes('/')) return clean(name, '/')
  if(name.includes('-')) return clean(name, '-')

  return name
}

const UnitType = ({ name, onPress }) => {
  let title = format(name)

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => onPress(title)}
      activeOpacity={.5}
    >
      <Text style={styles.text}>{ title }</Text>

      <Image
        source={require('@images/arrow.png')}
        style={styles.arrow}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width * .92,
    padding: 20,
    marginVertical: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6
  },
  text: {
    fontSize: 16,
    color: '#333'
  },
  arrow: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'silver'
  }
})

export default UnitType