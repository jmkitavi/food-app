import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>DETAILS</Text>
				<Button
          title="Go to Cart"
          onPress={() => this.props.navigation.navigate('Cart')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default Details

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
