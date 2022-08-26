import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, ScrollViewBase, StatusBar } from "react-native";
import useFontsLoaded from "./hooks/useFontsLoaded";
import AppNavigator from "./navigation";
import Categories from "./screens/categories";

export default function App() {
  const loaded = useFontsLoaded();

  if (!loaded) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  return (
    <>
      <AppNavigator />
      <StatusBar hidden />
    </>
  );
}
