import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: colors.black,
  },
  image: {
    height: 300,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    alignSelf: "stretch",
    borderTopWidth: 2,
    borderTopColor: colors.black,
    position: "relative",
  },
  name: {
    fontSize: 24,
    paddingVertical: 10,
    paddingLeft: 10,
    fontFamily: "mabry",
    backgroundColor: colors.secondary,
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
  },
  description: {
    fontSize: 20,
    lineHeight: 25,
    paddingLeft: 10,
    paddingTop: 20,
    fontFamily: "mabry",
  },
  weight: {
    fontSize: 14,
    fontFamily: "mabry",
    paddingLeft: 10,
    paddingTop: 20,
  },
  resume: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    paddingLeft: 10,
    alignSelf: "stretch",

    width: "100%",

    borderTopWidth: 2,
    borderTopColor: colors.black,
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
  },
  price: {
    fontSize: 22,
    fontFamily: "mabry",
    paddingLeft: 10,
  },
});
