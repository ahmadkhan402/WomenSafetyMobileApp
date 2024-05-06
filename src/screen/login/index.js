
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import ScreenNames from '../../../route/routes';
import { auth } from "../../../firebase";
import styles from "./styles";
import { colors } from "../../utils/database";

export default function Login({navigation}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Error, setError] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigation.navigate(ScreenNames.HOME)
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        let customErrorMessage = "";
        if (errorCode == "auth/user-not-found") {
          customErrorMessage = "User not found.\n  Please check your email.";
        } else if (errorCode == "auth/wrong-password") {
          customErrorMessage = "Incorrect password.\n  Please try again.";
        } else if (errorCode == "auth/invalid-email") {
          customErrorMessage = "Invalid-email.\n  Please try again.";
        } else if (errorCode == "auth/invalid-credential") {
          customErrorMessage =
            "Invalid Email or Password.\n  Please try again.";
        } else if (errorCode == "auth/network-request-failed") {
          customErrorMessage = "Network-request-failed.\n Please try again.";
        } else if (errorCode == "auth/weak-password") {
          customErrorMessage =
            "Weak password! \n Password should be at least 6 Characters.";
        } else if (errorCode == "auth/missing-password") {
          customErrorMessage = "Missing password! \n Please write password";
        } else if (errorCode == "auth/missing-email") {
          customErrorMessage = "Missing email! \n Please write email";
        } else {
          customErrorMessage = errorMessage;
        }
        setError(customErrorMessage);
        console.log(Error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={colors.LoginImageUrl} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "600" }}>Welcome Back!</Text>
        <Text style={{ fontSize: 17, fontWeight: "300" }}>
          Login to your account
        </Text>
      </View>
      <View
        style={{ marginTop: 20, alignContent: "center", marginHorizontal: 36 }}
      >
        <View style={styles.inputView}>
          <MaterialIcons
            name="email"
            style={styles.Icon}
            size={38}
            color={colors.btnBg}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={styles.inputView}>
          <AntDesign
            name="lock"
            style={styles.Icon}
            size={38}
            color={colors.btnBg}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(p) => setPassword(p)}
          />
        </View>
        <Text style={{ color: "red", textAlign: "right", fontSize: 13 }}>
          {Error}
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          marginVertical: 50,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate(ScreenNames.HOME)}>
          <Text style={styles.Text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
          <Text style={{ color: colors.btnBg, fontWeight: 700 }}>
            {" "}
            Signup here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


