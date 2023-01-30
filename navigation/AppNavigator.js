import React, { useState } from "react";
import OnBoarding from "./../screens/auth/OnBoarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./../screens/auth/SignIn";
import SignUp from "./../screens/auth/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { getFirebaseApp } from "../screens/auth/SignUp/utils/firebaseHelper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Home from "../screens/app/Home";
import Tasks from "../screens/app/Tasks";
import AddTask from "../screens/app/AddTask";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState();
  const app = getFirebaseApp();
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  const Tabs = () => {
    <Tab.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Tareas" component={Tasks} />
    </Tab.Navigator>;
  };
  if (user) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>

          <Drawer.Screen name="Tabs " component={Tabs} />
          <Drawer.Screen name="Añadir Tareas " component={AddTask} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
