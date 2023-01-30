import React from "react";

import { TouchableOpacity, Text  } from "react-native";
import Styles from "./styles";

const Button = (props) => {
  return (
    <TouchableOpacity {...props} style={[Styles.buttonContainer, props.type === "yellow" ? Styles.bgyellow : {} ]}>
      <Text style = {Styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};


export default Button;
