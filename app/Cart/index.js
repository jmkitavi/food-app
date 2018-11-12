import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles/styles'
class Cart extends Component {
static navigationOptions = {
    title: 'Cart',
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>

          <View style={styles.itemContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.image}
                source={{ uri: "https://assets.epicurious.com/photos/5761c748ff66dde1456dfec0/2:1/w_1260%2Ch_630/crispy-baked-chicken-wings.jpg" }}
                />
              <View style={{ marginStart: 10 }}>
                <Text style={styles.itemName}>Jollof Rice</Text>
                <Text> Ksh. 450</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center', padding: 5 }}>
              <Icon name="delete" size={30} color="white" style={{ margin: 5, color: 'red' }} />
            </TouchableOpacity>
          </View>

        </ScrollView>
        <View style={styles.bottomContainer} >
        <View style={styles.textContainer}>
          <Text style={{ color: 'white', marginHorizontal: 10 }}>Total: </Text>
          <Text style={{ color: 'white', fontSize: 20 }}>3400</Text>
        </View>
          <TouchableOpacity
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
