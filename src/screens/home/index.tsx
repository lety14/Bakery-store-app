import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { ButtonCustom } from "../../components";
import FadeIn from "../../components/fadeInView";
import { RootStackParamList } from "../../navigation/shop";
import { styles } from "./styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bakery-home.jpg")}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.content}>
          <View style={styles.bannerContainer}>
            <FadeIn>
              <View style={styles.brandContainer}>
                <Text style={styles.brand}>BAKERY </Text>
                <View style={styles.underline}></View>
              </View>
            </FadeIn>
            <FadeIn delay={600}>
              <Text style={styles.banner}>
                Encontra los postres mas ricos en la comodidad de tu casa
              </Text>
            </FadeIn>
          </View>

          <FadeIn delay={1000}>
            <ButtonCustom
              title="Ver categorias"
              onPress={() => navigation.navigate("Categories")}
            />
          </FadeIn>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
