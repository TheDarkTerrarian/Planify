import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, TextInput, Text, Linking, Alert } from "react-native";
import styles from "./styles";
import Title from "./../../../components/Title";
import Input from "../../../components/Input";
import Button from "./../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";


import {
  PRIVACY_AND_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from "../../../constants/links";
import { getFirebaseApp } from "./utils/firebaseHelper";
const SignUp = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(values);
  const onLinkPress = (url) => {
    Linking.openURL(url);
  };
  const onCheckboxPress = () => {
    setAgreed(!agreed);
  };

  const onChange = (value, key) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const onSubmit = () => {
    if (!values.firstName || !values.lastName) {
      Alert.alert("Aviso", "Por favor introduzca el nombre o el apellido");
      return;
    }
    if (!values.email) {
      Alert.alert("Aviso", "Ingrese el correo");
      return;
    }
    if (values.password !== values.confirmPassword) {
      Alert.alert("Aviso", "Las contraseñas no coinciden");
      return;
    }

    if (!agreed) {
      Alert.alert("Aviso", "Acepte los terminos UwU");
      return;
    }

    // Initialize Firebase
    const app = getFirebaseApp()
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: `${values.firstName} ${values.lastName}` 
        })
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
        if(error.code === 'auth/email-already-in-use'){
          Alert.alert('Aviso', 'El correo ya está en uso')
        }
        if(error.code === 'auth/email-invalid-email'){
          Alert.alert('Aviso', 'Correo no valido')
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../.././../assets/registro.png")}
        />
      </View>
      <Title>Unete a nosotros!</Title>
      <Input
        onChangeText={(text) => onChange(text, "firstName")}
        autoCorrect={false}
        placeholder="Nombre"
      />
      <Input
        onChangeText={(text) => onChange(text, "lastName")}
        autoCorrect={false}
        placeholder="Apellido"
      />
      <Input
        onChangeText={(text) => onChange(text, "email")}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        placeholder="Correo"
      />
      <Input
        onChangeText={(text) => onChange(text, "password")}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Contraseña"
        secureTextEntry
      />
      <Input
        onChangeText={(text) => onChange(text, "confirmPassword")}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirmar Contraseña"
        secureTextEntry
      />
      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={() => onCheckboxPress()} />
        <Text style={styles.agreeText}>
          Estoy de acuerdo con los{" "}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_AND_CONDITIONS_LINK)}
          >
            Términos y condiciones
          </Text>{" "}
          y{" "}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_AND_POLICY_LINK)}
          >
            Políticas de privacidad
          </Text>
        </Text>
      </View>
      <Button onPress={() => onSubmit()}>Regístrate</Button>
      <Text style={styles.footerText}>
        ¿Tienes cuenta?{" "}
        <Text
          onPress={() => navigation.navigate("SignIn")}
          style={styles.footerLink}
        >
          Ingresar
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
