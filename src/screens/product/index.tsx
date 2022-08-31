import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { FadeIn } from "../../components";
import { RootStackParamList } from "../../navigation/shop";
import { useAppSelector } from "../../store/hooks";
import { styles } from "./styles";

type ProductProps = NativeStackScreenProps<RootStackParamList, "Product">;

const Product = ({ navigation, route }: ProductProps) => {
  const product = useAppSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <Image source={product?.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product?.name}</Text>
        <FadeIn delay={200}>
          <Text style={styles.description}>{product?.description}</Text>
        </FadeIn>
        <FadeIn delay={400}>
          <Text style={styles.weight}>Peso: {product?.weight}</Text>
        </FadeIn>

        <View style={styles.resume}>
          <Text style={styles.price}>$ {product?.price?.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
