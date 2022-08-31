import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { FadeIn } from "../../components";
import CategoryItem from "../../components/category-item";
import { RootStackParamList } from "../../navigation/shop";
import { selectCategory } from "../../store/actions/categories.action";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";

type CategoriesProps = NativeStackScreenProps<RootStackParamList, "Categories">;

const Categories = ({ navigation }: CategoriesProps) => {
  const categories = useAppSelector((state) => state.categories.categories);
  const dispatch = useAppDispatch();

  const renderItem = ({ item, index }: { item: ICategory; index: number }): JSX.Element => (
    <View style={styles.item}>
      <FadeIn delay={200 * index}>
        <CategoryItem
          item={item}
          onSelected={() => {
            dispatch(selectCategory(item));
            navigation.navigate("Products", {
              categoryId: item.id,
              name: item.name,
            });
          }}
        />
      </FadeIn>
    </View>
  );
  const keyExtractor = (item: ICategory, index: number) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIPOS DE HARINAS</Text>
      <FlatList
        style={styles.grid}
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Categories;
