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
    margin: 10
  },
  flexRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
