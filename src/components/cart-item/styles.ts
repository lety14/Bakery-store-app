import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    backgroundColor: "#f2f2f2",
    padding: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    elevation: 3,
  },
  containerTouchable: {
    paddingRight: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "quicksand-semibold",
    color: colors.text,
    textAlign: "center",
  },
  product: {
    fontSize: 18,
    paddingBottom: 8,
    fontFamily: "quicksand-bold",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
