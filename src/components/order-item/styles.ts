import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "mabry",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailTotal: {
    fontSize: 14,
    fontFamily: "mabry",
  },
});
