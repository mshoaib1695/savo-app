import React from "react";
import { View } from "react-native";
import SplashScreen from './src/SplashScreen'
import Main from './src/Main'
import Login from './src/Login'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = { currentScreen: 'Splash'};
  console.log('APP')
  setTimeout(()=>{
    this.setState({currentScreen:'Login'})
  },3000)
}
  render(){
      const { currentScreen } = this.state
      let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : <Login/>
      return mainScreen      
  }
}
export default App
