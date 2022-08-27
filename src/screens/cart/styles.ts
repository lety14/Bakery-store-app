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
  },
  subtitle: {
    fontFamily: "quicksand-semibold",
    fontSize: 16,
    paddingVertical: 15,
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: 15,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.6,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  footer: {
    borderTopColor: "#bebebe",
    borderTopWidth: 1,
    paddingVertical: 3,
  },
  resume: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  buy: {
    fontFamily: "quicksand-bold",
    fontSize: 18,
  },
  total: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
  },
});
