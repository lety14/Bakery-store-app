import { useFonts } from "expo-font";

export default function useFontsLoaded() {
  const [loaded] = useFonts({
    "noto-sans-black": require("../../assets/fonts/NotoSans-Black.ttf"),
    mabry: require("../../assets/fonts/Mabry-Pro-Medium.ttf"),
  });

  return loaded;
}
