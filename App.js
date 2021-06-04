import * as React from 'react'
import {View} from 'react-native'
import Search from './Screens/SearchScreen'
import Transaction from './Screens/Transaction'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
  
}
const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:Transaction},
   Search: {screen:Search},
})
const AppContainer = createAppContainer(TabNavigator)