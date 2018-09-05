import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import { Application } from '@application/routes'
import { requestUnits } from '@modules/units'
import { requestUnitTypes } from '@modules/unitTypes'

class Main extends PureComponent {
  componentDidMount() {
    this.props.actions.getUnits()
    this.props.actions.getUnitTypes()
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Application />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  }
})

const mapDispatchToProps = dispatch => ({
  actions: {
    getUnits: () => dispatch(requestUnits()),
    getUnitTypes: () => dispatch(requestUnitTypes())
  }
})

export default connect(state => state, mapDispatchToProps)(Main)
