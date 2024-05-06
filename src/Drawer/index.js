import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, useWindowDimensions, StyleSheet, Image, Alert } from 'react-native';

import { NavigationContainer, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';

import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
import ScreenNames from '../route/routes';
import styles from './styles';
import { signOut } from 'firebase/auth';

import Routes from '../../route';
import { auth } from '../../firebase';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



// function Screen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Tabs"
//         component={Routes}
//         options={{ headerShown: false }} />
//     </Stack.Navigator>
//   )
// }

function CustomDrawerContent(props) {


  const isfocus = useIsFocused()
  const status = useDrawerStatus()



  const navigation = useNavigation()

  const handleLogout = () => {
    // Show confirmation alert before logging out
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: () => {userLogout()}
        }
      ],
      { cancelable: false }
    );
  };

    const userLogout=()=>{
      signOut(auth).then(() => {

        // alert('Sign-out successful')
        navigation.navigate(ScreenNames.LOGIN)
      }).catch((error) => {
        // An error happened.
        alert('An error happened')
      });

    }


  return (
    <View style={styles.drawerContainer}>
    <View style={styles.drawerTopIcon}>
    <Ionicons name="menu-outline" size={30} color="#fff" />
    </View>
      <View style={styles.drawerHeader}>
        {/* Display your name at the top */}
        <Text style={styles.nameText}>{userName.substring(0, 10)}</Text>
      </View>

      {/* Your existing content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <AntDesign name="logout" size={24} color="#fff"/>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default function DrawerNavigator() {

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'right',
        headerStyle: {
          backgroundColor: '#2c2c6c', // Instagram's header color
        },
        headerTintColor: '#fff', // Instagram's header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
   
      }}>
      <Drawer.Screen name={ScreenNames.ROUTE} component={Routes} />
      {/* <Drawer.Screen name={ScreenNames.HOME} component={Home} />
        <Drawer.Screen name={ScreenNames.MEDICINE} component={Medicine} />
        <Drawer.Screen name={ScreenNames.MEDICALHISTORY} component={MedicalHistory} />
        <Drawer.Screen name={ScreenNames.MYDOCTOR} component={MyDoctor} />
        <Drawer.Screen name={ScreenNames.MYAPOINTMENTS} component={MyApointments} /> */}
    </Drawer.Navigator>
  )
}