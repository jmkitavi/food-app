import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Divider, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles/styles'

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    const { menuItem } = this.props.navigation.state.params

    return (
      <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
         <Image
            resizeMode='cover'
            style={{ height: 300 }}
            source={{ uri: menuItem.picture}}
          />
          <View style={styles.contentContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.itemName}>{menuItem.name}</Text>
              <Text  > @ Ksh. {menuItem.price}</Text>
            </View>
              <Divider style={styles.divider} />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.contentTitle}>INGREDIENTS</Text>
                <Text>• Rice</Text>
                <Text>• Rice</Text>
                <Text>• Rice</Text>
                <Text>• Rice</Text>
              </View>
          </View>
      </ScrollView>
      <View style={styles.bottomContainer} >
        <TouchableOpacity
          style={styles.addButton}>
          <Text style={styles.addText}>Add To Cart</Text>
          <Icon name="cart" size={20} color="white" style={{ margin: 5, color: 'black' }} />
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export default Details

