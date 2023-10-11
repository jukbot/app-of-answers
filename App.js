import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionSpecs,
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import Font, { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import WelcomeScreen from "./src/screens/WelcomeScreen";
import AnswerScreen from "./src/screens/AnswerScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    LoveLace: require("./assets/fonts/Lovelace-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const fadeTransition = {
    gestureDirection: "horizontal",
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  };

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#000" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Answer"
          component={AnswerScreen}
          options={fadeTransition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
