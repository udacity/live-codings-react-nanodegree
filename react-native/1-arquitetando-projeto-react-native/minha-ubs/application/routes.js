import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Units from '@screens/units/Units'
import UnitTypes from '@screens/units/UnitTypes'
import UnitList from '@screens/units/UnitList'
import UnitDetail from '@screens/units/UnitDetail'

import t from '@config/i18n'
import Icon from '@components/Icon'

const fontFamily = Platform.select({
  ios: { fontFamily: 'Slabo 27px' },
  android: { fontFamily: 'slabo' }
})

const tabConfig = {
  initialRouteName: 'Unit',
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    upperCaseLabel: false,
    inactiveTintColor: 'gray',
    activeTintColor: 'black',
    indicatorStyle: {
      opacity: 0
    },
    style: {
      height: 60,
      backgroundColor: 'white',
      borderTopColor: 'gray'
    },
    labelStyle: {
      fontSize: 14,
      ...fontFamily,
    }
  }
}

const stackConfig = {
  headerMode: 'screen',
  navigationOptions: {
    headerBackTitle:  null,
    headerTintColor: '#00a97f',
    headerTitleStyle: {
      color: '#00a97f',
      ...fontFamily,
      fontWeight: 'normal'
    },
    headerBackTitleStyle: {
      ...fontFamily
    }
  }
}

const GlobalRoutes = {
  Detail: { screen: UnitDetail }
}

const UnitsScreen = StackNavigator({
  Main: { screen: Units },
  ...GlobalRoutes
}, stackConfig)

const UnitTypesScreen = StackNavigator({
  Main: { screen: UnitTypes },
  List: { screen: UnitList },
  ...GlobalRoutes
}, stackConfig)

export const Application = TabNavigator({
  Unit:  {
    screen: UnitsScreen,
    navigationOptions: {
      tabBarLabel: t('unit/bottomLabel'),
      tabBarIcon: () => <Icon name='unit' />
    }
  },
  Types: {
    screen: UnitTypesScreen,
    navigationOptions: {
      tabBarLabel: t('unitTypes/bottomLabel'),
      tabBarIcon: () => <Icon name='types' />
    }
  }
}, tabConfig)