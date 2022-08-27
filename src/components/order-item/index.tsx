import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors.constants";
import { styles } from "./styles";
import dateFormat from "../../utils/dateFormat";
import IOrderItem from "../../types/IOrdertem.type";

type OderItemProps = {
  item: IOrderItem;
  onDelete: (id: number) => void;
};

const OrderItem = ({ item, onDelete }: OderItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{dateFormat(item.date)}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailTotal}>$ {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OrderItem;
