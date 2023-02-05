import { DrawerContentScrollView } from "@react-navigation/drawer"
import { getAuth, signOut } from "firebase/auth"
import { Linking, StyleSheet, Text } from "react-native"
import { color } from "react-native-reanimated"
import colors from "../../constants/colors"
import { PRIVACY_AND_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from "../../constants/links"
import { getFirebaseApp } from "../../screens/auth/SignUp/utils/firebaseHelper"

const DrawerContent = (props)=>{

    const logout = () => {
        const app = getFirebaseApp()
        const auth = getAuth(app)
        signOut(auth).then(()=>{
            console.log("i'm out")
        }).catch((error)=>{
            console.error(error)
        })
    }

    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={()=> props.navigation.navigate("Home")}>Inicio</Text>
            <Text style={styles.link} onPress={()=> props.navigation.navigate("Tasks")}>Tareas</Text>
            <Text style={styles.link} onPress={()=> Linking.openURL(PRIVACY_AND_POLICY_LINK)}>Políticas y Privacidad</Text>
            <Text style={styles.link} onPress={()=> Linking.openURL(TERMS_AND_CONDITIONS_LINK)}>Términos y Condiciones</Text>
            <Text style={styles.link} onPress={logout}>Cerrar Sesión</Text>           
        </DrawerContentScrollView>
    )
}

const styles= StyleSheet.create({
    link:{
      color: colors.black,
      fontWeight: "500",
      fontSize: 14,
      margin: 8,
      marginHorizontal: 16,
    }
  })

export default DrawerContent