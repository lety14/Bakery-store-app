import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import CartNavigator from "./cart";
import { View } from "react-native";

const Tabs = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName="ShopTab" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons name={focused ? "home" : "home-outline"} size={22} color="black" />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons name={focused ? "cart" : "cart-outline"} size={22} color="black" />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons
                  name={focused ? "file-tray-full" : "file-tray-full-outline"}
                  size={22}
                  color="black"
                />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
