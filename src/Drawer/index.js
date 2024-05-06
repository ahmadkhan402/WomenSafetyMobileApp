import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, useWindowDimensions, StyleSheet, Image, Alert } from 'react-native';

import { NavigationContainer, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';

import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
import styles from './styles';
import { signOut } from 'firebase/auth';
import { FontAwesome ,Feather} from '@expo/vector-icons';

import Routes from '../../route';
import { auth } from '../../firebase';
import ScreenNames from '../../route/routes';
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

function CustomDrawerContent({ navigation }) {
  const drawerItems = [
    { label: 'MAP', icon: <FontAwesome name="map-marker" size={24} color="black" />, screen: ScreenNames.MAPVIEW },
    { label: 'User Call', icon: <Feather name="phone-call" size={24} color="black" />, screen: ScreenNames.USERCALL },
    // Add more drawer items as needed
  ];

  const renderItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.drawerItem}
      onPress={() => {
        navigation.closeDrawer(); 
        navigation.navigate(item.screen);
      }}
    >
      <View style={styles.itemIconContainer}>
        {item.icon}
      </View>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView style={styles.drawerContainer}>
      {/* You can place your logo or top icon here */}
      <View style={styles.drawerItemsContainer}>
        {drawerItems.map((item, index) => renderItem(item, index))}
      </View>
    </DrawerContentScrollView>
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