import React from "react";
import { FlatList, Text, View } from "react-native";
import { OrderItem } from "../../components";
import { ORDERS } from "../../constants/data/orders.constants";
import IOrderItem from "../../types/IOrdertem.type";
import { styles } from "./styles";

const Orders = () => {
  const items = ORDERS;

  const onHandleDelete = (id: number) => {};

  const keyExtractor = (item: IOrderItem) => item.id.toString();

  const renderItem = ({ item }: { item: IOrderItem }) => (
    <OrderItem item={item} onDelete={onHandleDelete} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Ordenes</Text>
      <View style={styles.orderList}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Orders;
