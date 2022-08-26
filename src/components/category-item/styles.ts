import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    padding: 10,
    paddingVertical: 30,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontFamily: "quicksand-semibold",
    color: colors.text,
    textAlign: "center",
  },
});
