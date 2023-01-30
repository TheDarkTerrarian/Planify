import React from "react";
import { Pressable, View } from "react-native";
import styles from "./styles";
const Checkbox = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      {props.checked &&  <View style={styles.innerSquare} />  }
      
    </Pressable>
  );
};
export default Checkbox;
