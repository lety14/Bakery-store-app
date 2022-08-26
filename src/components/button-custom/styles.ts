import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 15,
    paddingHorizontal: 30,
    width: 250,
    backgroundColor: colors.black,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "quicksand-bold",
    textAlign: "center",
  },
});
