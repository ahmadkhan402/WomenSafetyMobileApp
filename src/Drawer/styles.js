import { StyleSheet } from 'react-native';
import { colors } from '../utils/database';

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.blue,
        // justifyContent: "space-between",
      },
      drawerTopIcon:{
        marginTop:20,
        padding:28
      },
      drawerHeader: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        // borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      content: {
         flex: 1,
        justifyContent:"flex-end",
        marginBottom: 20,
        paddingHorizontal: 16,
      },
      logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logoutText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#fff',
      },
      
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: '2%', // Adjusted padding using height percentage
    paddingHorizontal:'2%', // Adjusted padding using width percentage
  },
  drawerTopIcon: {
    // Style for top icon/logo
  },
  drawerItemsContainer: {
    marginTop: '2%', // Adjusted margin using height percentage
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '4%', // Adjusted padding using height percentage
    paddingHorizontal: '3%', // Adjusted padding using width percentage
    borderRadius: 16, // Adjusted border radius using width percentage
    marginBottom:'6%', // Adjusted margin using height percentage
    backgroundColor: colors.lightGrey,
  },
  itemIconContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 10, // Adjusted border radius using width percentage
    padding: '2%', // Adjusted padding using width percentage
    marginRight:'3%', 
    elevation: 10, // Adjusted margin using width percentage
  },
  itemIcon: {
    width: '8%', // Adjusted icon size using width percentage
    height: '8%', // Adjusted icon size using width percentage
  },
  itemText: {
    fontSize: 16, 
    fontWeight: '500', // Adjusted font size using width percentage
    color: colors.black,
  }
  });
  export default styles