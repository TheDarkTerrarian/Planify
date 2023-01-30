import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./navigation/AppNavigator";
import 'react-native-gesture-handler';

export default function App() {
  return <AppNavigator />;
}
