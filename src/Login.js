import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Body, Segment, Button as Btn, Container } from 'native-base';
import { TextInput, } from "react-native-gesture-handler";
import Main from './Main'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        marginTop: 50,
        // justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "700",

    },
    textInput: {
        height: 40,
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        height: 40,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    },

})

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            typedUsername: '',
            typedPassword: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="Enter username"
                    keyboardType="email-address"
                    placeholderTextColor="#000"
                    onChange={
                        (text) => {
                            this.setState({ typedUsername: text })
                        }
                    }
                />
                <TextInput style={styles.textInput}
                    placeholder="Enter your password"
                    keyboardType="default"
                    placeholderTextColor="#000"
                    secureTextEntry={true}
                    onChange={
                        (text) => {
                            this.setState({ typedPassword: text })
                        }
                    }
                />
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}
                        onPress={() => this.props.navigation.push('Main')}
                        >Login</Text>

                    </View>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems:'flex-end'}}> 
                    <View style={{backgroundColor: 'black', height: 2, width:100, alignSelf: 'center',marginLeft:'auto'}} /> 
                    <Text style={{  paddingHorizontal:5, fontSize: 12, fontWeight:'500', alignSelf: 'center', }}>OR</Text> 
                    <View style={{backgroundColor: 'black', height: 2,  width:100, alignSelf: 'center', marginRight:'auto',}} /> 
                </View>


                <TouchableOpacity style={{ height: 40, marginTop: 40 }}
                
                >
                    <View style={{
                        height: 40,
                        margin: 10,
                        alignItems: 'center',
                        backgroundColor: '#44619D'
                    }}>
                        <Text style={styles.buttonText}>Login with Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 40, marginTop: 40 }}>
                    <View style={{
                        height: 40,
                        margin: 10,
                        alignItems: 'center',
                        backgroundColor: '#D62D20'
                    }}>
                        <Text style={styles.buttonText}>Log in Google Acount</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginTop:20}}>Forget Password ?</Text>
            </View>

        )
    }
}
export default Login