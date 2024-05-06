import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import Login from "../src/screen/login"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNames from "./routes";
import Register from "../src/screen/signup";
import { auth, db } from "../firebase";
import HomeScreen from "../src/screen/Home";
import Signup from "../src/screen/signup";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();



export default function Routes() {
  return (
      // <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={auth.currentUser ? ScreenNames.HOME : ScreenNames.LOGIN} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={Signup} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />

      </Stack.Navigator>
  //  </NavigationContainer>
  );
}
