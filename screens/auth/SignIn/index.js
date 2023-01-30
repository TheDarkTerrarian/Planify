import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View,Image, TextInput, Text } from 'react-native'
import styles from './styles'
import Title from './../../../components/Title'
import Input from '../../../components/Input'
import Button from './../../../components/Button'
const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../.././../assets/login.png') }/>
      </View>
      <Title>Bienvenido de nuevo!</Title>
      <Input autoCapitalize ='none' keyboardType="email-address" autoCorrect={false} placeholder ="Correo"/>
      <Input autoCapitalize ='none' autoCorrect={false} placeholder = "Contraseña" secureTextEntry/>
      <Button>Igresar</Button>
      <Text style = {styles.footerText}>¿No tienes cuenta? <Text onPress={()=> navigation.navigate('SignUp')} style={styles.footerLink}>Registrate</Text> </Text>
    </SafeAreaView>
  )
}

export default SignIn;