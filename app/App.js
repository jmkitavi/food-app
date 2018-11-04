import React from 'react'
import { StatusBar, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import Cart from './Cart'
import Details from './Details';


const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Cart: Cart,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
    }
  }
)

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor="black"
            barStyle="light-content"
          />

        <AppNavigator />
      </View>
    )
  }
}

export default App