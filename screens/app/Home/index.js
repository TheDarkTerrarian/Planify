import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlusIcon from "../../../components/PlusIcon";

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Home</Text>
      <PlusIcon></PlusIcon>
    </SafeAreaView>
  );
};

export default Home;
