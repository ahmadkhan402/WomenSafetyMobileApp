import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { colors } from '../utils/database';
import CustomHeader from '../../components/header';

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState('');

  const fetchCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      fetchLocationName(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const fetchLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      setLocationName(data.display_name);
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  return (
    <View style={styles.container}>
    <CustomHeader/>
      <TouchableOpacity style={styles.button} onPress={fetchCurrentLocation}>
        <Text style={styles.buttonText}>Where am I?</Text>
      </TouchableOpacity>
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
            title="Your Location"
            description={locationName}
          />
        </MapView>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Location Name"
        value={locationName}
        onChangeText={(text) => setLocationName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
   position:"absolute",
    top: "50%",
    paddingHorizontal:16,
    marginHorizontal: 28,
    alignItems:"center",
    alignSelf:"center",
    backgroundColor: colors.lightOrange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
  textInput: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default MapScreen;
