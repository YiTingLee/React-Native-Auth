import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginFrom from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBqwPfzy960bBdyZv9u6JOxrmIZuC_rYyk',
            authDomain: 'authentication-7d01c.firebaseapp.com',
            databaseURL: 'https://authentication-7d01c.firebaseio.com',
            projectId: 'authentication-7d01c',
            storageBucket: 'authentication-7d01c.appspot.com',
            messagingSenderId: '969518556027'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginFrom />
            </View>
        );
    }
}

export default App;
