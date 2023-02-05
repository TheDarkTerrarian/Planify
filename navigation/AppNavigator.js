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
import { createDrawerNavigator} from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import Home from "../screens/app/Home";
import Tasks from "../screens/app/Tasks";
import AddTask from "../screens/app/AddTask";
import DrawerContent from "../components/DrawerContent/index";

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
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen name="Home" component={Home} options= {{tabBarIcon: ({focused})=>(
          <Image style={styles.icon} source={focused ? require("../assets/home_blue.png") : require("../assets/home_grey.png")}></Image>
        )}}/>
        <Tab.Screen name="Tasks" component={Tasks} options= {{tabBarIcon: ({focused})=>(
          <Image style={styles.icon} source={focused ? require("../assets/calendar_blue.png") : require("../assets/calendar_grey.png")}></Image>
        )}}/>
      </Tab.Navigator>
    )
  };
  if (user) {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=> (<DrawerContent {...props}></DrawerContent>)}>
          <Drawer.Screen name="Tabs " component={Tabs} />
          <Drawer.Screen name="AddTask" component={AddTask} options={{headerShown: false}}/>
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

const styles= StyleSheet.create({
  icon:{
    width: 24,
    height: 24
  }
})

export default AppNavigator;
