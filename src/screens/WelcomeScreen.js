import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const WelcomeScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded, error] = useFonts({
    Helvetica: require("../../assets/fonts/Helvetica.ttf"),
    HelveticaBold: require("../../assets/fonts/Helvetica-Bold.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"white"} />
      {/* <View style={{ marginTop: responsiveHeight(15) }}>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            color: "white",
            fontFamily: "HelveticaBold",
            fontStyle: "italic",
          }}
        >{`Pick your\nQuestion`}</Text>
      </View> */}

      <Image
        source={require("../../assets/l2.png")}
        resizeMode="contain"
        style={{
          marginTop: responsiveHeight(10),
          width: responsiveWidth(50),
          height: responsiveHeight(25),
        }}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2.3),
          color: "#DEAB4A",
          textAlign: "center",
          fontStyle: "italic",
          marginTop: responsiveHeight(2),

        }}
      >{`Concentrate on your inquiry and ask closed-ended questions like,\nWill I find true love soon?\nor\nShould I pursue that investment?`}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Answer");
        }}
        style={{
          padding: 15,
          borderColor: "white",
          borderWidth: 1,
          width: "80%",
          alignItems: "center",
          borderRadius: 10,
          position: "absolute",
          bottom: 50,
        }}
      >
        <Text
          style={{
            color: "#DEAB4A",
            fontSize: 18,
            fontFamily: "HelveticaBold",
          }}
        >
          Get your answer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
