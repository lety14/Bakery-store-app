import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 28,
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    borderWidth: 6,
    borderColor: colors.white,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
  },
  info: {
    flex: 1,
    borderTopColor: colors.black,
    borderTopWidth: 2,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 23,
    fontFamily: "mabry",
    color: colors.white,
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  price: {
    fontSize: 18,
    lineHeight: 40,
    fontFamily: "mabry",
    color: colors.text,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: colors.primary,
    borderColor: colors.black,
  },
  buttonText: {
    fontFamily: "mabry",
    fontSize: 17,
    color: colors.white,
  },
});
