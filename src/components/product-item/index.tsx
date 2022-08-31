import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type ProductItemProps = {
  item: IProduct;
  onSelected: () => void;
};

const ProductItem = ({ item, onSelected }: ProductItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.4)"]}
          locations={[0.6, 0.8]}
          style={styles.background}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>$ {item.price}.-</Text>
        <TouchableOpacity style={{ ...styles.button }} onPress={onSelected}>
          <Text style={styles.buttonText}>Ver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
