import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginFrom from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBqwPfzy960bBdyZv9u6JOxrmIZuC_rYyk',
            authDomain: 'authentication-7d01c.firebaseapp.com',
            databaseURL: 'https://authentication-7d01c.firebaseio.com',
            projectId: 'authentication-7d01c',
            storageBucket: 'authentication-7d01c.appspot.com',
            messagingSenderId: '969518556027'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out!
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginFrom />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
