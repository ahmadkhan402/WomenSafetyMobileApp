import { StyleSheet } from "react-native";
import { colors } from "../../utils/database";

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
      marginBottom:"10%"
    },
    button1: {
  marginTop:20,
      alignItems:"center",
      width:"38%",
      backgroundColor: colors.btnBg,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 30,
      marginRight:"5%"
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    buttonText1: {
      fontSize: 12,
      color: '#fff',
      fontWeight: 'bold',

    },
    featuresContainer: {
      
      // width:"100%",
      flexDirection:"row",
      paddingHorizontal:18,
      justifyContent:"space-between",
      alignItems:"center"
    }
  });
  
  export default styles;