import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, HomeScreen, ProductScreen, ProductsScreen } from "../screens";
import { colors } from "../constants/colors.constants";
import { isAndroid } from "../utils/platformValidator";

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
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: isAndroid ? colors.text : colors.textLight,
        headerTitleStyle: {
          fontFamily: "quicksand-bold",
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
