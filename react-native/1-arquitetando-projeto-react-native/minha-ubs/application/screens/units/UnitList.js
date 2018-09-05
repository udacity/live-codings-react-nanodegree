import React, { PureComponent } from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Text from '@components/Text'
import Loading from '@components/Loading'
import Unit from '@components/Unit'

import t from '@config/i18n'

class UnitList extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  })

  openDetails = item => {
    this.props.navigation.navigate('Detail', { item })
  }

  render() {
    const { id } = this.props.navigation.state.params
    const { collection, fetching } = this.props.units

    const units = collection.filter(item => item.Tipo === id)

    return (
      <View style={styles.container}>
        <Loading isVisible={fetching} />

        { !fetching && (
          <Text
            message='totalItems'
            values={{ units: units.length }}
            style={styles.units}
          />
        )}

        <FlatList
          style={styles.flatList}
          data={units}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.openDetails(item)}>
              <Unit item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1,
    backgroundColor: '#eee'
  },
  units: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    fontSize: 12,
    color: 'black',
    zIndex: 100,
    elevation: 100,
    padding: 5,
    opacity: .6
  }
})

export default connect(state => state)(UnitList)