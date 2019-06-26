import React from "react";
import { View } from "react-native";
import SplashScreen from './src/SplashScreen'
import Home from './src/Home'

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
      let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : <Home/>
      return mainScreen      
  }
}
export default App
