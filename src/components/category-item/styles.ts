import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    marginVertical: 8,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    justifyContent: "center",
    padding: 8,
    paddingVertical: 28,
  },
  name: {
    fontSize: 22,
    fontFamily: "quicksand-semibold",
    color: colors.text,
    textAlign: "center",
  },
});
