import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBadge from 'react-native-icon-badge'
import MenuItem from '../common/MenuItem'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      loading: true,
      cartItems: []
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: "Kitavi\'s Kitchen",
    headerLeft: <Icon name="silverware-fork-knife" size={25} color="gold" style={{ marginStart: 15 }} />,
    headerRight:
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate('Cart')}
      >
        <IconBadge
          MainElement={
              <Icon name="cart" size={25} color="white" style={{ marginRight: 10 }} />
          }
          // BadgeElement={
          //   <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{items.length}</Text>
          // }
          // IconBadgeStyle={{
          //   minWidth: 16,
          //   height: 16,
          //   borderRadius: 8,
          //   backgroundColor: 'red'
          // }}
          // Hidden={items.length == 0 }
          Hidden={ true }
          />
      </TouchableOpacity>
    }
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .catch(error => this.showAlert('Authentication Error', error.message));

    this.getMenu();
  }

  getMenu() {
    firebase.database().ref('menu')
      .on('value', (snapshot) => {
        this.setState(() => ({ menu: snapshot.val(), loading: false }));
      });
  }

  addToCart(item) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`cart/${user.uid}`).push(item)
        ToastAndroid.show(
          `${item.name} of ${item.price} has been added to the cart.`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        )
      } else {
        this.showAlert(
          'Authentication Error',
          'Attempt to Log In Anonymously Failed. Please Try Again.',
        )
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
       {this.state.loading ? (
         <ActivityIndicator />
       ):(
         this.state.menu.map(menuItem =>
          <MenuItem
            item={menuItem}
            onPress={() => this.props.navigation.navigate('Details', { menuItem })}
            addToCart={this.addToCart}
          />)
       )}
      </ScrollView>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
})
