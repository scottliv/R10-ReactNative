import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/style";

export default StyleSheet.create({
  text: {
    fontFamily: typography.fontMainlight,
    fontSize: 16
  },
  header: {
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: typography.fontMain
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25
  },
  container: {
    marginLeft: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey
  }
});
