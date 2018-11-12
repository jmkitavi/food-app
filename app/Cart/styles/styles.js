import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 70,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    },
    image: {
      height: 70,
      width: 70,
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 30,
    },
    bottomContainer: {
      backgroundColor: 'black',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkoutButton: {
      width: 150,
      height: 34,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 17,
    },
    checkoutText: {
      color: 'black',
      fontWeight: 'bold',
    }
});


export default styles;