import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import Font, { useFonts } from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Video, ResizeMode, Audio } from "expo-av";

const { height, width } = Dimensions.get("window");

const WelcomeScreen = () => {
  const video = React.useRef(null);
  const navigation = useNavigation();

  let [fontsLoaded, error] = useFonts({
    LoveLace: require("../../assets/fonts/Lovelace-Regular.otf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      }
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
      <View
        style={{
          zIndex: 1,
          flex: 1,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Image
          source={require("../../assets/fortune.png")}
          resizeMode="cover"
          style={{
            padding: 0,
            marginTop: responsiveHeight(20),
            width: 240,
            height: 240,
          }}
        />
        <View style={styles.textView}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.3),
              color: "#fff",
              textAlign: "center",
              lineHeight: responsiveFontSize(3.2),
              fontFamily: "LoveLace",
              marginTop: responsiveHeight(1),
            }}
          >{`Concentrate on your inquiry\n and ask closed-ended questions?`}</Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "#fff",
              textAlign: "center",
              lineHeight: responsiveFontSize(2.6),
              fontFamily: "LoveLace",
              marginTop: responsiveHeight(2),
            }}
          >{`eg:\nWill I find true love soon?\nShould I pursue that investment?\nShould I take a break?`}</Text>
        </View>
        <TouchableHighlight
          underlayColor="#ffffff33"
          onPress={() => {
            navigation.navigate("Answer");
          }}
          style={styles.button}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: responsiveFontSize(2.4),
              fontFamily: "LoveLace",
            }}
          >
            Get your Answer
          </Text>
        </TouchableHighlight>
      </View>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/bg.mp4")}
        useNativeControls={false}
        shouldPlay
        resizeMode={ResizeMode.COVER}
        isLooping
        cache
      ></Video>
      <View style={styles.overlay} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#151633",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.1,
    backgroundColor: "#000000",
    height: height,
  },
  backgroundVideo: {
    flex: 1,
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: null,
    opacity: 0.9,
  },
  textView: {
    padding: 10,
  },
  button: {
    padding: 15,
    borderColor: "white",
    borderWidth: 1,
    width: responsiveWidth(60),
    alignItems: "center",
    opacity: 1,
    borderRadius: 8,
    position: "absolute",
    bottom: 60,
  },
});
