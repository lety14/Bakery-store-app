import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors.constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bannerContainer: {
    paddingBottom: 130,
  },
  brandContainer: {
    position: "relative",
  },

  underline: {
    position: "absolute",
    bottom: 10,
    width: 150,
    height: 20,
    backgroundColor: colors.primary,
  },
  brand: {
    zIndex: 1,
    color: colors.white,
    fontFamily: "noto-sans-black",
    fontSize: 50,
  },
  banner: {
    fontFamily: "mabry",
    fontSize: 28,
    lineHeight: 40,
    color: colors.white,
  },
});
