import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, FlatList } from 'react-native'

import t from '@config/i18n'
import Text from '@components/Text'
import Loading from '@components/Loading'
import UnitType from '@components/UnitType'

class Main extends Component {
  static navigationOptions = {
    title: t('unitTypes/title'),
  }

  navigate = (id, name) => {
    this.props.navigation.navigate('List', { id, name })
  }

  render() {
    const { collection, fetching } = this.props.unitTypes


    return (
      <View style={styles.container}>
        <Loading isVisible={fetching} />

        <FlatList
          style={styles.flatList}
          data={collection}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (
            <UnitType
              name={item.Descricao}
              onPress={name => this.navigate(item.Codigo, name)}
            />
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
  }
})

export default connect(state => state)(Main)