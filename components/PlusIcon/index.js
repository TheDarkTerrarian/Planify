import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./style";

const PlusIcon = () => {
    const navigation = useNavigation()
    return (
    <Pressable style={styles.container} hitSlop = {8} onPress={()=>navigation.navigate("AddTask")}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default PlusIcon ;