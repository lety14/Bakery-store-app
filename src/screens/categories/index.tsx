import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, FlatList, Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { FadeIn } from "../../components";
import CategoryItem from "../../components/category-item";
import { CATEGORIES } from "../../constants/data/categories.constants";
import { RootStackParamList } from "../../navigation/shop";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";

type CategoriesProps = NativeStackScreenProps<RootStackParamList, "Categories">;

const Categories = ({ navigation }: CategoriesProps) => {
  const renderItem = ({ item, index }: { item: ICategory; index: number }): JSX.Element => (
    <FadeIn delay={200 * index}>
      <CategoryItem
        item={item}
        onSelected={() => navigation.navigate("Products", { categoryId: item.id, name: item.name })}
      />
    </FadeIn>
  );
  const keyExtractor = (item: ICategory, index: number) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Categories;
