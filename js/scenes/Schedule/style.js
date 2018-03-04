import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/style";

export default StyleSheet.create({
  text: {
    fontFamily: typography.fontMain,
    fontSize: 16
  },
  subText: {
    color: colors.mediumGrey
  },
  header: {
    paddingVertical: 10,
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: typography.fontMain,
    backgroundColor: colors.lightGrey
  },
  container: {
    padding: 15,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2
  },
  flexRowContainer: {
    marginVertical: 15,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
