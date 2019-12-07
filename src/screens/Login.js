import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { addUser } from '../store/Actions'
import { connect } from "react-redux";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            mail: '',
            // mail: 'hruday@gmail.com',
            password: '',
            // password: 'hruday123',
            data: {
                "username": "hruday@gmail.com",
                "password": 'hruday123'
            },
        }
    }

    submit() {
        if(this.props.state.mail && this.props.state.mail.length ){
            if(this.props.state.password && this.props.state.password.length ){
                if(this.props.state.mail === this.state.data.username){
                    if(this.props.state.password === this.state.data.password){
                        this.props.navigation.navigate('Dashboard')
                    }else{
                        alert('Incorrect Password')
                    }
                }else{
                    alert('Please enter registered username')
                }
            } else {
                alert('Please enter password')
            }    
        } else {
            alert('Please enter username')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'space-around' }} >
                <View>
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >LOGIN</Text>
                </View>
                <View style={{ marginHorizontal: 40 }} >
                    <View style={{}} >
                        <TextInput
                            value={this.props.state.mail}
                            onChangeText={(value) => { this.props.updateStateVal({ mail: value }) }}
                            // onChangeText={(value) => { this.setState({ mail: value }) }}
                            placeholder='Username'
                            style={{ alignSelf: 'stretch', height: 50, borderBottomWidth: 0.5 }}
                        />
                    </View>
                    <View style={{}} >
                        <TextInput
                            value={this.props.state.password}
                            onChangeText={(value) => { this.props.updateStateVal({ password: value }) }}
                            // onChangeText={(value) => { this.setState({ password: value }) }}
                            placeholder='Password'
                            style={{ alignSelf: 'stretch', height: 50, borderBottomWidth: 0.5 }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.submit()} style={{ alignSelf: 'center', backgroundColor: '#ddd', borderRadius: 15 }} >
                    <Text style={{ color: '#000', fontSize: 16, margin: 15 }} >Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.Login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // we call it using this.props.updateStateVal({ mail })
        updateStateVal: (data) => dispatch({ type: 'Login_Store_InputValue', data }),
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(Login)