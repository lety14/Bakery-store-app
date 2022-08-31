import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens";
import { colors } from "../constants/colors.constants";
import { isAndroid } from "../utils/platformValidator";

export type CartStackParamList = {
  Cart: undefined;
};

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.text : colors.textLight,
        headerTitleStyle: {
          fontFamily: "mabry",
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
