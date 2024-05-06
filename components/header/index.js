import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../route/routes';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function CustomHeader() {
  const navigation = useNavigation()


  const openDrawer = () => {
    navigation.openDrawer();
  };


  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu-outline" size={30} color="black" style={styles.menuIcon} />
        </TouchableOpacity>
       <Text style={styles.title}>WOMEN'S SECURITY</Text>
      </View>
    </View>
  );
};
