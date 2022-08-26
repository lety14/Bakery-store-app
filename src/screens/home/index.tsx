import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import ButttomCustom from "../../components/button-custom";
import FadeIn from "../../components/fadeInView";
import { RootStackParamList } from "../../navigation/shop";
import { styles } from "./styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background-home.jpg")}
        style={styles.background}
        resizeMode="stretch">
        <FadeIn>
          <Image style={styles.logo} source={require("../../../assets/bakery.png")} />
        </FadeIn>
        <FadeIn delay={1000}>
          <ButttomCustom title="Ver categorias" onPress={() => navigation.navigate("Categories")} />
        </FadeIn>
      </ImageBackground>
    </View>
  );
};

export default Home;
