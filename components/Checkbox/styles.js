import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        height: 16,
        width:16,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.blue,
        justifyContent: "center",
        alignItems:"center"
    },
    innerSquare:{
        backgroundColor: colors.blue,
        height: 10,
        width:10
    }
})

export default styles;