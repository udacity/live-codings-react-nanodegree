import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import Text from '@components/Text'

const Loading = ({ isVisible = false }) => {
  if(!isVisible) return null

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color="silver" />
      <Text message="loading" style={styles.text} />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: 'white',
    padding: 5,
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100,
    elevation: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'silver',
    marginLeft: 5
  }
})

export default Loading