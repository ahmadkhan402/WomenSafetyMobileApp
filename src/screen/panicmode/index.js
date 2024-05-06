import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { colors } from '../../utils/database';
import CustomHeader from '../../../components/header';

export default function PanicButtonScreen(){
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);

  const handleAlarm = async () => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(require('./../../../assets/sound.mp3'));
      await soundObject.playAsync();
      setIsAlarmPlaying(true);
    } catch (error) {
      console.error('Error playing alarm sound:', error);
    }
  };

  return (
    <View style={styles.container}>
    <CustomHeader/>
    <View style={{flex: 1, alignItems: 'center',
    justifyContent: 'center'}}>
      <Text style={styles.title}>Press if you need help</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAlarm}
        disabled={isAlarmPlaying}
      >
        <Text style={styles.buttonText}>{isAlarmPlaying ? 'Alarm Playing' : 'Activate Panic'}</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#ff0000', // Red color for emergency
    width:"75%",
    height:"38%",
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold',
  },
});


