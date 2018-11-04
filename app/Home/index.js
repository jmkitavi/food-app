import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBadge from 'react-native-icon-badge'

class Home extends Component {
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
          BadgeElement={
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>3</Text>
          }
          IconBadgeStyle={{
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: 'red'
          }}
          // Hidden={this.state.BadgeCount==0}
          />
      </TouchableOpacity>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>HOME</Text>
        <Button
          title="Go to Cart"
          onPress={() => this.props.navigation.navigate('Cart')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})