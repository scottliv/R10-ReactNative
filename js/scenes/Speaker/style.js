import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/style";

export default StyleSheet.create({
  text: {
    fontFamily: typography.fontMainlight,
    fontSize: 16,
    lineHeight: 25
  },
  header: {
    fontFamily: typography.fontMain,
    margin: 15,
    fontSize: 24
  },
  speakerTextContainer: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    padding: 15
  },
  container: {
    paddingTop: 15,
    backgroundColor: colors.black,
    flex: 1
  }
});
