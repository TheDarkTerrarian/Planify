import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import colors from '../../constants/colors'
const Input = (props) => {
  return <TextInput placeholderTextColor={colors.darkGrey} {...props} style={[styles.input,props.outline === true ? styles.outlined : {}]}/>
 
}
export default Input;
