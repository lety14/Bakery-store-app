import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { CartStackParamList } from "../../navigation/cart";
import { styles } from "./styles";

type CartProps = NativeStackScreenProps<CartStackParamList, "Cart">;

const Cart = ({ navigation }: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>CART</Text>
    </View>
  );
};

export default Cart;
