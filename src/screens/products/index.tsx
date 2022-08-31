import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { FadeIn, ProductItem } from "../../components";
import { RootStackParamList } from "../../navigation/shop";
import { filteredProducts, selectProduct } from "../../store/actions/products.action";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import IProduct from "../../types/IProduct.type";
import { styles } from "./styles";

type ProductsProps = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ navigation, route }: ProductsProps) => {
  const categoriesSelected = useAppSelector((state) => state.categories.selected?.id);
  const productsFiltered = useAppSelector((state) => state.products.filteredProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filteredProducts(categoriesSelected));
  }, []);

  const renderItem = ({ item, index }: { item: IProduct; index: number }): JSX.Element => (
    <FadeIn delay={200 * index}>
      <View style={styles.item}>
        <ProductItem
          item={item}
          onSelected={() => {
            dispatch(selectProduct(item));
            navigation.navigate("Product", {
              productId: item.id,
              name: item.name,
            });
          }}
        />
      </View>
    </FadeIn>
  );
  const keyExtractor = (product: IProduct, index: number) => product.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={productsFiltered} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Products;
