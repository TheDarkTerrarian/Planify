import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    backIcon: {        
        width: 30,
        height: 30,        
    },
    backContainer: {
        paddingTop: 6,
    },
    container:{
      paddingHorizontal:24,
      marginBottom: 15,
      backgroundColor: colors.white
    },
    label:{
        fontSize: 12
    }
})
export default styles