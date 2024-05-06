import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomHeader from '../../../components/header';
import ScreenNames from '../../../route/routes';

export default function HomeScreen ({ navigation }){

  const [showFeatures, setShowFeatures] = React.useState(false);
  const toggleFeature = () => {
    // Toggle the state to show or hide the features container
    setShowFeatures(!showFeatures);
  };

  return (
    <View style={{flex:1}}>

<CustomHeader/>
   
    <ImageBackground
      source={require('./../../../assets/womenSecurity.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Women's Security App</Text>
        <Text style={styles.description}>
          Empowering women with safety and security wherever they go.
        </Text>
        <TouchableOpacity style={styles.button} onPress={toggleFeature}>
          <Text style={styles.buttonText}>Explore Features</Text>
        </TouchableOpacity>

        {showFeatures && (
          
      
        <View style={styles.featuresContainer}>

        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate(ScreenNames.USERCALL)}>
          <Text style={styles.buttonText1}>Emergency Call</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate(ScreenNames.MAPVIEW)}>
          <Text style={styles.buttonText1}>Check Location</Text>
        </TouchableOpacity>
        </View>
      )}
      </View>
    </ImageBackground>
    </View>
  );
};


