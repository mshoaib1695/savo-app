import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import HomeScreen from './Home'
import Login from './Login'

const AppNavigator = createBottomTabNavigator({
  Settings:Login,
  Home: HomeScreen,
}
);

const App = createAppContainer(AppNavigator);
export default Main
// 4F6D7A