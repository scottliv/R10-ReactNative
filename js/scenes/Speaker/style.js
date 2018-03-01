import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/style";

export default StyleSheet.create({
  text: {
    fontFamily: typography.fontMainlight
  },
  header: {
    fontFamily: typography.fontMain
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey
  }
});
