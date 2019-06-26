import React from "react";
import { View, Text } from "react-native";
import { Body, Segment, Button as Btn, Container } from 'native-base';
import Login from './Login'
import Signup from './Signup'
class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login:true
    }
  }
  render() {
    return (
      <View style={{ }}>
        <Segment style={{ backgroundColor: '#fff', height: 50, marginBottom: 20 }}>
          <Btn onPress={() => this.setState({login:true})} first actuve style={{ backgroundColor: '#000', borderRadius: 7, height: 40, width: 100, marginRight: 20 }}>
            <Text style={{ color: '#fff', padding: 10, fontSize: 20, textAlign: 'center' }}>Loog in</Text>
          </Btn>
          <Btn onPress={() => this.setState({login:false})} last style={{ backgroundColor: '#000', borderRadius: 7, height: 40, width: 100 }}>
            <Text style={{ color: '#fff', padding: 10, fontSize: 20, textAlign: 'center' }}>Sign up</Text>
          </Btn>
        </Segment>
          {
            this.state.login === true ? <Login/> : <Signup/>
          }
        </View>
    );
  }
}

export default HomeScreen