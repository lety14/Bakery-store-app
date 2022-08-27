import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CartItem } from "../../components";
import { CART } from "../../constants/data/cart.constants";
import { CartStackParamList } from "../../navigation/cart";
import ICartItem from "../../types/ICartItem.type";
import { styles } from "./styles";

type CartProps = NativeStackScreenProps<CartStackParamList, "Cart">;

const Cart = ({ navigation }: CartProps) => {
  const items: ICartItem[] = CART;
  const total = 2000;

  const keyExtractor = (item: ICartItem): string => {
    return item.id.toString();
  };

  const handleDelete = () => {
    // console.warn(id);
  };

  const renderItem = ({ item }: { item: ICartItem }): JSX.Element => {
    return <CartItem item={item} onDelete={handleDelete} />;
  };

  const onHandleConfirm = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi pedido</Text>
      <Text style={styles.subtitle}>Estas llevando:</Text>
      <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      <View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.containerTotal} onPress={onHandleConfirm}>
            <Text style={styles.buy}>COMPRAR</Text>
            <View style={styles.resume}>
              <Text style={styles.total}>Total:</Text>
              <Text style={styles.total}>$ {total}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
