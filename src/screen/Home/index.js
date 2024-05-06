import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function HomeScreen ({ navigation }){
  const navigateToFeatures = () => {
    // Navigate to the features screen
    navigation.navigate('Features');
  };

  return (
    <ImageBackground
      source={require('./../../../assets/womenSecurity.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Women's Security App</Text>
        <Text style={styles.description}>
          Empowering women with safety and security wherever they go.
        </Text>
        <TouchableOpacity style={styles.button} onPress={navigateToFeatures}>
          <Text style={styles.buttonText}>Explore Features</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


