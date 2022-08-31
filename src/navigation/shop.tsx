import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, HomeScreen, ProductScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/colors.constants";

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Products: {
    categoryId: number;
    name: string;
  };
  Product: {
    productId: number;
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.white,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "mabry",
        },
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categorias" }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen name="Product" component={ProductScreen} options={{ title: "Producto" }} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
