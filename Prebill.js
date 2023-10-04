// import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Subfooter from './components/Subfooter.js';
import Footer from './components/Footer.js';
import Makebill2 from './Makebill2.js';
import { useRoute } from '@react-navigation/native';

const TextInputExample = () => {
  const [gst, onChangeName] = useState('');
  const [number, onChangeNumber] = useState('');
  const [billname, onChangeBill] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { username, password } = route.params;


  return (
    <ScrollView>
      <Header />
      <Nav />
      <SafeAreaView style={styles.body}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={gst}
          placeholder="GST"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone No."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeBill}
          value={billname}
          placeholder="Bill Name"
          keyboardType="default"
        />

        <Pressable
          style={styles.button1}
          onPress={() =>
            navigation.navigate('Makebill2', {
              gst,
              number,
              billname,
              username,
              password
            })
          }
        >
          <Text style={styles.text}>Generate Bill</Text>
        </Pressable>
      </SafeAreaView>
      <Subfooter />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    height:350,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  button1: {
    backgroundColor: '#007AFF', // Vibrant blue color
    height: 90,
    width: 90,
    borderRadius: 45, // Rounded shape
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#3498DB', // Match shadow color with button color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  text: {
    color: 'white',
  },
});

export default TextInputExample;