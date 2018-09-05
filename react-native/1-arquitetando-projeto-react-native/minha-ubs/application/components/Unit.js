import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Text from '@components/Text'
import { capitalize } from '@application/utils'

const Unit = ({ item, style = {} }) => (
  <View style={[styles.wrapper, style]}>
    <Text style={styles.title}>{ item.Nome }</Text>
    <Text style={styles.subtitle}>{ item.NomeTipo }</Text>

    <Text style={styles.service}>{ capitalize(item.Servico) }</Text>

    <Text style={styles.info}>
      { `${capitalize(item.Logradouro)}, ${item.Numero}` }
    </Text>

    { item.Telefone1.length > 0 && (
      <Text style={styles.info}>(11) { item.Telefone1 }</Text>
    )}

    <Text style={styles.hours}>{ item.Horario }</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 20
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 15,
    color: 'silver',
    marginTop: 2
  },
  service: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 15
  },
  info: {
    fontSize: 14,
    color: 'gray'
  },
  hours: {
    marginTop: 15,
    color: '#00a97f',
    alignSelf: 'center'
  }
})

export default Unit