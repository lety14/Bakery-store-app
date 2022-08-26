import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButttomCustomProps = {
  onPress: () => void;
  title: string;
};

const ButttomCustom = ({ onPress, title }: ButttomCustomProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
  </TouchableOpacity>
);

export default ButttomCustom;
