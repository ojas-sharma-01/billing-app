import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from 'react-native';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Subfooter from './components/Subfooter.js';
import Footer from './components/Footer.js';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseText, setResponseText] = useState(null);
  const getBorderColor = (value) => {
    return value ? 'blue' : 'black';
  };

  const feth = () => {
    const fdat = {"gst" : username, "passwd" : password};
    fetch('https://govtinvoice-server.onrender.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdat),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Request failed');
            }
            return response.text();
          })
          .then((responseData) => {
            setResponseText(responseData);
            if (responseData == "registered"){
            setTimeout(() => {
            navigation.navigate("HomeScreen", {username, password});
            setResponseText(null);
                }, 800);
            }
          })
          .catch((e) => {
            console.error('Error:', e);
            setResponseText('Error occur');
          });

    };

  return (
    <ScrollView>
      <Header />
      <Nav />
      <View style={styles.basic}>
        <Text style={styles.container}>Sign Up</Text>
        <Text style={{position : 'absolute', top: 65, left: 45 }}>Email Id</Text>
        <TextInput
          style={[styles.input, { borderColor: getBorderColor(username) }, {marginBottom : 30}]}
          placeholder="Enter your Email Id"
          placeholderTextColor="gray"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={{position : 'absolute', top: 155, left: 45 }}>Password</Text>
        <TextInput
          style={[styles.input, { borderColor: getBorderColor(password) }]}
          placeholder="Set your Password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholderStyle={{ fontSize: 16 }}
        />
        {responseText && <Text>{responseText}</Text>}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'lightblue' : '#007AFF',
              marginTop: 60,
              elevation: 5,
            },
          ]}
          onPress={feth}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 'lightblue' : '#007AFF',
              marginTop: 10,
              elevation: 5,
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </Pressable>
      </View>

      <Subfooter />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  basic: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    fontSize: 30,
    marginBottom : 40,
  },
  input: {
    marginTop: 10,
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '40%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default SignupScreen;
