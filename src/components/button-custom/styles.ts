import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 35,
    width: "100%",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 18,
  },
  text: {
    fontSize: 22,
    color: colors.white,
    fontFamily: "mabry",
    textAlign: "center",
  },
});
