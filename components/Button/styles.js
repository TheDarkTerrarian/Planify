import { StyleSheet } from "react-native"
import colors from "../../constants/colors";

const Styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: colors.blue,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
    
      },
      buttonText:{
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold"
      },
      bgyellow:{
        backgroundColor: colors.yellow
      }
})

export default Styles;