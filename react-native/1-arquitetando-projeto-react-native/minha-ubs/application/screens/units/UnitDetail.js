import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import Text from '@components/Text'
import Unit from '@components/Unit'

class UnitDetail extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.Nome
  })

  render() {
    const { item } = this.props.navigation.state.params

    const latLong = {
      latitude: item.Geo.Latitude,
      longitude: item.Geo.Longitude
    }

    return (
      <View style={styles.wrapper}>
        <MapView
          style={styles.wrapper}
          initialRegion={{
            ...latLong,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={latLong}
            image={require('@images/pinBig.png')}
          />
        </MapView>
        <Unit item={item} style={styles.unit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  unit: {
    marginVertical: 0,
    borderTopWidth: 2,
    borderColor: '#00a97f'
  }
})

export default UnitDetail
