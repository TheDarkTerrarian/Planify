import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View,Image, TextInput, Text, Alert } from 'react-native'
import styles from './styles'
import Title from './../../../components/Title'
import Input from '../../../components/Input'
import Button from './../../../components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseApp } from '../SignUp/utils/firebaseHelper'
const SignIn = ({navigation}) => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (value, key) => {
        setValues({
      ...values,
      [key]: value
    })
  }

  const onSubmit = ()=>{
    if (!values.email) {
      Alert.alert("Por favor, introduzca el correo")
      return;
    }
    const app = getFirebaseApp()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // ...
    }).catch((error) => {
      if (error.code === "auth/user-not-found") {
        Alert.alert("Usuario no encontrado")
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Contraseña invalida")
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Correo invalido")
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../.././../assets/login.png') }/>
      </View>
      <Title>Bienvenido de nuevo!</Title>
      <Input autoCapitalize ='none' keyboardType="email-address" autoCorrect={false} placeholder ="Correo" onChangeText = {value=>onChange(value, "email")}/>
      <Input autoCapitalize ='none' autoCorrect={false} placeholder = "Contraseña" secureTextEntry onChangeText = {value=>onChange(value, "password")}/>
      <Button onPress={onSubmit}>Igresar</Button>
      <Text style = {styles.footerText}>¿No tienes cuenta? <Text onPress={()=> navigation.navigate('SignUp')} style={styles.footerLink}>Registrate</Text> </Text>
    </SafeAreaView>
  )
}

export default SignIn;