import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Provider } from "react-redux";
import useFontsLoaded from "./hooks/useFontsLoaded";
import AppNavigator from "./navigation";
import store from "./store/store";

export default function App() {
  const loaded = useFontsLoaded();

  if (!loaded) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
        <StatusBar hidden />
      </Provider>
    </>
  );
}
