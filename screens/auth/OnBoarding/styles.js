import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageContainer:{
        flex: 1,
    },
    image:{
        flex: 1
    },
    content:{
      backgroundColor:colors.white,
      padding: 26,
      paddingTop: 0,
      paddingHorizontal: 26,
      paddingBottom: 40
    },
    title:{
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.black
  
  
    },
    subtitle:{
      color: colors.darkGrey,
      fontSize: 15,
      textAlign: "center",
      marginVertical: 18
  
    },
    buttonContainer:{
      backgroundColor: "#00B4D8",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 15
  
    },
    boxRounded:{
        backgroundColor: "red",
        height: 60,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "absolute",
        bottom: 0, 
        backgroundColor: colors.white
    }
  
  })
  export default Styles;