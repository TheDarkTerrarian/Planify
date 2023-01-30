import { StyleSheet } from "react-native";
import colors from "./../../../constants/colors";

const styles = StyleSheet.create({
  image: {
    width: 150,
    alignSelf: "center",
  },
  imageContainer: {
    marginBottom: 5,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 26,
  },
  footerText: {
    color: colors.darkGrey,
    fontSize: 15,
    textAlign: "center",
  },
  footerLink: {
    color:colors.blue,
    fontWeight: "bold"
  },
});
export default styles;
