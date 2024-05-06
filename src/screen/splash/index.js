import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function Splash({navigation}) {
    return (
        <View style={styles.container}>
          <View
            style={{
              marginVertical: "70%",
              borderColor: "#fff",
              borderWidth: 3,
              borderRadius: 100,
            }}
          >
            <Image
              source={require("./../../../assets/logoSecurity.jpg")}
              style={{ width: 150, height: 150, borderRadius:75,padding: 50 }}
            />
          </View>
          <View style={{ alignContent: "center" }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.Text}>Get Started!</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}
