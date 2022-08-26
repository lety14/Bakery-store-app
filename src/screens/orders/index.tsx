import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import ButttomCustom from "../../components/button-custom";
import FadeIn from "../../components/fadeInView";
import { OrdersStackParamList } from "../../navigation/orders";
import { styles } from "./styles";

type OrdersProps = NativeStackScreenProps<OrdersStackParamList, "Orders">;

const Orders = ({ navigation }: OrdersProps) => {
  return (
    <View style={styles.container}>
      <Text>ORDERS</Text>
    </View>
  );
};

export default Orders;
