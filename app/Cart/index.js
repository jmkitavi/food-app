import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles/styles'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cartItems: [],
      total: 0,
    };
  }

  static navigationOptions = {
    title: 'Cart',
  }

  componentDidMount() {
    this.getCartItems()
  }

  getCartItems() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`cart/${user.uid}`)
          .on('value', (snapshot) => {
            const data = []

            if (snapshot.val()) {
              Object.keys(snapshot.val()).forEach((id) => {
                  data.push({
                    key: id,
                    id: snapshot.val()[id].id,
                    name: snapshot.val()[id].name,
                    price: snapshot.val()[id].price,
                    picture: snapshot.val()[id].picture,
                  });
              });
            }

            this.setState(() => ({ cartItems: data, loading: false }), () => this.calculateTotal() );
          })
      } else {
        console.log('add to cart user', user)
      }
    });
  }

  calculateTotal() {
    const { cartItems } = this.state

    const total = cartItems.reduce((sum, item) => {
      return sum + item.price
    }, 0)

    this.setState({ total })
  }

  removeItem(item) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`cart/${user.uid}/${item.key}`).remove()
        ToastAndroid.show(
          `${item.name} of ${item.price} has been removed from your cart.`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      } else {
        this.showAlert(
          'Authentication Error',
          'Attempt to Log In Anonymously Failed. Please Try Again.',
        )
      }
    });
  }

  completeOrder() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: true })
        this.state.cartItems.map((item) => {
            firebase.database().ref(`history/${user.uid}`).push(item)
            firebase.database().ref(`cart/${user.uid}/${item.key}`).remove()
        })
        ToastAndroid.show(
          `Your order of ${this.state.cartItems.length} items worth ${this.state.total} has been received and is being processed.`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        )

        this.setState({ loading: false })

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
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {this.state.loading ? (
          <ActivityIndicator />
        ):(
          this.state.cartItems.map(cartItem =>
            <View style={styles.itemContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.image}
                  source={{ uri: cartItem.picture }}
                  />
                <View style={{ marginStart: 10 }}>
                  <Text style={styles.itemName}>{cartItem.name}</Text>
                  <Text> Ksh. {cartItem.price}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => this.removeItem(cartItem)}
                style={{ justifyContent: 'center', padding: 5 }}>
                <Icon name="delete" size={30} color="white" style={{ margin: 5, color: 'red' }} />
              </TouchableOpacity>
            </View>
            )
        )}

        </ScrollView>
        <View style={styles.bottomContainer} >
        <View style={styles.textContainer}>
          <Text style={{ color: 'white', marginHorizontal: 10 }}>Total: </Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{this.state.total}</Text>
        </View>
          <TouchableOpacity
            onPress={() => this.completeOrder()}
            style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Complete Order</Text>
            <Icon name="chevron-double-right" size={20} style={{ margin: 5, color: 'black' }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Cart
