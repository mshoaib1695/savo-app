import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4f6d7a',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    color:'#F5FCFF',
    fontSize: 20,
  }
})
class Signup extends React.Component {
  render(){
    return( 
      <View style={styles.container}>
        <Text style={styles.text}>Signup</Text>
      </View>
    )
  }
}
export default Signup
// 4F6D7A
