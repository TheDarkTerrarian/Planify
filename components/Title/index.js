import React from 'react'
import { Text } from 'react-native'
import styles from './styles'
const Title = (props) => {
  return <Text style={[styles.title, props.type === "blue" ? styles.blue : {}]}>{props.children}</Text>
};

export default Title;