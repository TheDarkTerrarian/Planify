import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {  Image, Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Title from "../../../components/Title"
import Input from "../../../components/Input"
import Button from "../../../components/Button"

const AddTask = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Pressable hitSlop={8} style= {styles.backContainer} onPress={()=>navigation.goBack()}>
        <Image resizeMode='contain' style= {styles.backIcon} source={require("../../../assets/back.png")}></Image>
      </Pressable>
      <Title type={"blue"}>Agregar Tarea</Title>
      <Text style={styles.label}>Describe la tarea</Text>
      <Input outline placeholder= {"Escriba aqui..."}></Input>
      <Button>Agregar Tarea</Button>
    </SafeAreaView>
  ) 
}

export default AddTask