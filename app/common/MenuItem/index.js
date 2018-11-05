import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import styles from './styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MenuItem = ({ item, onPress, addToCart }) => {
  return (
    <View
      style={styles.itemContainer}
      >
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={onPress}
        >
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: item.picture }}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.itemName}>{item.name} </Text>
          <Text style={styles.itemPrice}>@ Ksh. {item.price} </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(item)}
            >
            <Icon
              name="plus"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.addText}>Add to Cart</Text>
        </View>
      </View>
    </View>
  )
}

export default MenuItem;