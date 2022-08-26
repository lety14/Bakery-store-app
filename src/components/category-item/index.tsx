import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import ICategory from "../../types/ICategory.type";
import { styles } from "./styles";

type CategoryItemProps = {
  item: ICategory;
  onSelected: () => void;
};

const CategoryItem = ({ item, onSelected }: CategoryItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.containerTouchable }} onPress={onSelected}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
