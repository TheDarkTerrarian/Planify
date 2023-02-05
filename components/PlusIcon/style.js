import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        position: "absolute",
        bottom: 24,
        right: 24,
        width: 60,
        height: 60, 
        borderRadius: 30,
        justifyContent: "center",
        alignItems:"center"
    },
    plus: {
        fontSize: 32,
        color: colors.white,
        marginTop: -2
    }
})
export default styles