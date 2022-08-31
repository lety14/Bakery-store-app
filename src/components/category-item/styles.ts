import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 28,
    backgroundColor: colors.white,
  },
  containerTouchable: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  icon: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 21,
    fontFamily: "mabry",
    color: colors.black,
    textAlign: "left",
  },
  description: {
    fontSize: 12.5,
    fontFamily: "mabry",
    color: colors.black,
    textAlign: "left",
  },
  details: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
});
