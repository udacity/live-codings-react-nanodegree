import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import Text from '@components/Text'
import Icon from '@components/Icon'
import Loading from '@components/Loading'
import t from '@config/i18n'

class Main extends PureComponent {
  static navigationOptions = {
    title: t('unit/title'),
  }

  openUnit = item => {
    this.props.navigation.navigate('Detail', { item })
  }

  render() {
    const { collection, fetching, fetched } = this.props.units

    return (
      <View style={styles.wrapper}>
        <Loading isVisible={fetching} />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -23.533773,
            longitude: -46.625290,
            latitudeDelta: 0.2,
            longitudeDelta: 0.04,
          }}
        >
        { collection.map((unit, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: unit.Geo.Latitude,
              longitude: unit.Geo.Longitude,
             }}
          >
            <Image
              source={require('@images/pin.png')}
              style={{ width: 12, height: 17 }}
            />
            <Callout
              tooltip
              style={styles.customView}
              onPress={() => this.openUnit(unit)}
            >
              <Text style={styles.title}>{ unit.Nome }</Text>
              <Text style={styles.subtitle}>{ unit.Horario }</Text>
            </Callout>
          </Marker>
        ))}
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 10
  },
  customView: {
    backgroundColor: '#00a97f',
    padding: 10,
    zIndex: 1,
  },
  title: {
    color: 'white'
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12
  }
})


export default connect(state => state)(Main)
