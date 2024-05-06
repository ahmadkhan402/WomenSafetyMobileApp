import { StyleSheet } from 'react-native';
import { colors } from '../../src/utils/database';

const styles = StyleSheet.create({
    header: {
     flex: 0.1,
     justifyContent: 'center',
      backgroundColor: "#fff" ,
      paddingTop:20,
    },
 headerContainer: {

    flexDirection: 'row',
    alignItems: 'center',
      paddingHorizontal: 20,
    
 },
    menuIcon: {
      marginRight: 20,

    },
    userAvatar: {

      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 25,
    },
    userInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      textAlign:"center",
      paddingLeft:20
    },
    userName: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  export default styles