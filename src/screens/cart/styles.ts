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
    fontFamily: "mabry",
    fontSize: 25,
    paddingVertical: 10,
  },
  subtitle: {
    fontFamily: "mabry",
    fontSize: 16,
    paddingVertical: 15,
  },
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.black,
    shadowColorr: colors.black,

    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  item: {
    paddingBottom: 10,
  },
  footer: {
    borderTopColor: colors.black,
    borderTopWidth: 1,
    paddingVertical: 3,
  },
  resume: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  buy: {
    fontFamily: "mabry",
    fontSize: 18,
  },
  total: {
    fontFamily: "mabry",
    fontSize: 16,
  },
});
