// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,ScrollView} from 'react-native';
import HomeScreen from './Home.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Subfooter from './components/Subfooter.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//  const handleLogin = () => {
//    // Check if the username and password match a stored user data object
//    const user = users.find((user) => user.username === username && user.password === password);
//
//    if (user) {
//      console.log('Login successful:', user);
//      navigation.navigate('HomeScreen');
//    } else {
//      console.log('Login failed: Invalid username or password.');
//    }
//  };

  return (
    <ScrollView>
    <Header />
          <Nav />
      <View style = {styles.basic}>
        <Text>Login</Text>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
              <Button title="Login" onPress={() => navigation.navigate('HomeScreen')} />
              <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      </View>
    <Subfooter />
                  <Footer />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  basic: {
    paddingTop : 50,


    alignItems: 'center',
    height: 400,
  },


  })

export default LoginScreen;