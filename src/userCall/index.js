import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../utils/database';
import { FontAwesome ,Feather} from '@expo/vector-icons';
import CustomHeader from '../../components/header';

export default function UserCall() {
  const emergencyNumbers = [
    {  numberOf: 'Eidi Foundation', number: '1122' },
    { numberOf: 'Edhi Foundation', number: '115' },
    { numberOf: 'Chhipa Foundation', number: '1020' },
    { numberOf: 'Rescue 1122', number: '1122' },
    { numberOf: 'Police', number: '15' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        Linking.openURL(`tel:${item.number}`);
      }}
    >
    <Feather name="phone-call" size={24} color="black" />
      <Text style={styles.country}>{item.numberOf}</Text>
      <Text style={styles.number}>{item.number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <CustomHeader/>
      <Text style={styles.title}>Emergency Numbers</Text>
      <FlatList
        data={emergencyNumbers}
        renderItem={renderItem}
        keyExtractor={(item) => item.country}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
   

  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
   paddingVertical: 20,
  },
  item: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
   flexDirection:"row",
    justifyContent: 'space-between',
    // width: '%'
  },
  country: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    marginTop: 5,
  },
});
