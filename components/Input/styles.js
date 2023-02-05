import { StyleSheet } from "react-native";
import colors from './../../constants/colors'
const styles = StyleSheet.create({
input:{
    backgroundColor: colors.lightGray,
    paddingHorizontal: 24,
    paddingVertical:13 ,
    borderRadius:10,
    marginVertical:8,
    fontSize:15,
    color: colors.darkGrey
},
outlined:{
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white    
}
})
export default styles;