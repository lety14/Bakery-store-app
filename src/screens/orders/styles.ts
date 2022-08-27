import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    alignSelf: "flex-start",
    fontFamily: "quicksand-bold",
    fontSize: 25,
    paddingVertical: 10,
    paddingBottom: 30,
  },
  orderList: {
    flex: 1,
  },
});
