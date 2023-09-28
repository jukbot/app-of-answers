import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { statements } from "../data";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const AnswerScreen = () => {
  const navigation = useNavigation();
  function getRandomStatement(statements) {
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
    // setOutputs(statements[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "#DEAB4A", fontSize: responsiveFontSize(2) }}>
        {getRandomStatement(statements)}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
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
          Ask again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
