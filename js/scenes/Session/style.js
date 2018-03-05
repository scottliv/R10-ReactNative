import { StyleSheet } from "react-native";
import { typography, colors } from "../../config/style";

export default StyleSheet.create({
  text: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    paddingBottom: 15
  },
  subText: {
    color: colors.mediumGrey
  },
  header: {
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: typography.fontMain
  },
  container: {
    flex: 0.6,
    justifyContent: "flex-start",
    padding: 15
  },
  flexRowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    paddingVertical: 15
  },
  flexHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  time: {
    fontFamily: typography.fontMain,
    paddingBottom: 10,
    color: colors.red
  },
  name: { margin: 25 }
});
