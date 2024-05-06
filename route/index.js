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
import Splash from "../src/screen/splash";
import MapViewScreen from "../src/map";
import UserCall from "../src/userCall";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();



export default function Routes() {
  return (
      // <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={ ScreenNames.SPLASH} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={Signup} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
        <Stack.Screen name={ScreenNames.MAPVIEW} component={MapViewScreen} />
        <Stack.Screen name={ScreenNames.USERCALL} component={UserCall} />
      </Stack.Navigator>
  //  </NavigationContainer>
  );
}
