import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens";
import { colors } from "../constants/colors.constants";
import { isAndroid } from "../utils/platformValidator";

export type OrdersStackParamList = {
  Orders: undefined;
};

const Stack = createNativeStackNavigator<OrdersStackParamList>();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
