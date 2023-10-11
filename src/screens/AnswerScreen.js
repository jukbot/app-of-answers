import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useRef, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { statements } from "../data";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const AnswerScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, [fadeAnim]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const navigation = useNavigation();

  function getRandomStatement(statements) {
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
    // setOutputs(statements[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styles.backgroundImage}
      >
        <View
          style={{
            zIndex: 1,
            flex: 1,
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Animated.View
            style={[
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
                flex: 1,
                alignItems: "center",
                justifyContent: "start",
              },
            ]}
          >
            <Image
              source={require("../../assets/butterfly.png")}
              resizeMode="cover"
              style={{
                padding: 0,
                marginTop: responsiveHeight(24),
                width: 200,
                height: 120,
              }}
            />
            <View style={styles.textView}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.2),
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: responsiveFontSize(3.4),
                  fontFamily: "LoveLace",
                  marginTop: responsiveHeight(6),
                }}
              >
                {getRandomStatement(statements)}
              </Text>
            </View>
          </Animated.View>
          <TouchableHighlight
            underlayColor="#ffffff33"
            onPress={() => {
              navigation.navigate("Welcome");
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
              Ask again
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.overlay} />
      </ImageBackground>
    </View>
  );
};

export default AnswerScreen;

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
    width: width,
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
    paddingLeft: 20,
    paddingRight: 20,
    width: responsiveWidth(80),
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
