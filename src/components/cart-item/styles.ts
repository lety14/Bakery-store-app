import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 25,
    justifyContent: "space-between",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  containerTouchable: {
    paddingRight: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "mabry",
    color: colors.text,
    textAlign: "center",
  },
  qty: {
    fontFamily: "mabry",
    fontSize: 12,
  },
  price: {
    fontFamily: "mabry",
    fontSize: 16,
    paddingTop: 3,
  },
  product: {
    fontSize: 20,
    paddingBottom: 8,
    fontFamily: "mabry",
  },
});
