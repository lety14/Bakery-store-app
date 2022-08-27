import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { colors } from "../../constants/colors.constants";
import ICartItem from "../../types/ICartItem.type";
import { styles } from "./styles";

type CartItemProps = {
  item: ICartItem;
  onDelete: () => void;
};

const CartItem = ({ item, onDelete }: CartItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View>
          <Text style={styles.product}>{item.name}</Text>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>$ {item.price}</Text>
        </View>
        <TouchableOpacity style={{ ...styles.containerTouchable }} onPress={onDelete}>
          <Ionicons name="trash" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
