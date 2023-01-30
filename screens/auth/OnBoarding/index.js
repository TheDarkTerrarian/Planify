import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import Styles from "./styles";
const OnBoarding = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={require("../../../assets/bg.png")}
        />
        <View style={Styles.boxRounded} />
      </View>
      <View style={Styles.content}>
        <Text style={Styles.title}>El mejor planificador</Text>
        <Text style={Styles.subtitle}>
          Organice sus tareas de la mejor manera y aumente su productividad
        </Text>
        <Button
          onPress={() => navigation.navigate("SignIn")}
          style={Styles.buttonContainer}
        >
          Ingresar
        </Button>
        <Button onPress={() => navigation.navigate("SignUp")} type="yellow">
          Registrar
        </Button>
      </View>
    </View>
  );
};

export default OnBoarding;
