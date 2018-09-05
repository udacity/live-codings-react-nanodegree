import React, { PureComponent } from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import t from '../config/i18n'

type Props = {
  key: number;
  values?: object;
  style?: object;
  children?: React.Node
}

class I18nText extends PureComponent<Props> {
  static defaultProps = {
    message: '',
    values: {},
    style: {}
  }

  render() {
    const { message, values, children, style, ...rest } = this.props

    return (
      <Text style={[styles.text, style]} {...rest}>
        { children
          ? children
          : t(message, values)
        }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#333',
    ...Platform.select({
      ios: { fontFamily: 'Slabo 27px' },
      android: { fontFamily: 'slabo' }
    })
  }
})

export default I18nText