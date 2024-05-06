import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 30,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#f39c12',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default styles;