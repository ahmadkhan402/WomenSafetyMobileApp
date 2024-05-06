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

  const [userName, setUserName] = useState("");
  const openDrawer = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
      getDataFromFirestore()
  }, [])


  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu-outline" size={30} color="#fff" style={styles.menuIcon} />
        </TouchableOpacity>
       
      </View>
    </View>
  );
};
