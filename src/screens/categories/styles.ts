import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    height: 120,
    borderColor: colors.black,
  },
  title: {
    fontFamily: "mabry",
    textAlignVertical: "center",
    fontSize: 28,
    letterSpacing: 1.5,
    paddingVertical: 30,
    textAlign: "center",
    borderTopWidth: 1.5,
    borderBottomWidth: 2,
  },
  grid: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    padding: 5,
  },
});
