import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Todo from './components/Todo.js';
import Footer from './components/Footer.js';
import Subfooter from './components/Subfooter.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Makebill2 from './Makebill2.js';
import { useRoute } from '@react-navigation/native';


const TextInputExample = ({ route }) => {
  const [formData, setFormData] = useState({
    gst: '',
    billname: '',
  });

  const [isGstFocused, setIsGstFocused] = useState(false);
  const [isBillnameFocused, setIsBillnameFocused] = useState(false);

  const [responseText, setResponseText] = useState(null);

  const navigation = useNavigation();
  const { username, password } = route.params;
  console.log(username, password);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleLogJSON = () => {
    const jsonData = formData;
    jsonData["userid"] = username;
    console.log(jsonData);

    fetch('https://govtinvoice-server.onrender.com/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData != "Not Found"){
                              setTimeout(() => {
                              navigation.navigate("ViewBill", {username, password, responseData});
                              setResponseText(null);
                                  }, 300);
                              }
      })
      .catch((error) => {
        setResponseText('Error occur');
      });


  };

  return (
    <ScrollView>
      <Header />
      <Nav />
      <SafeAreaView style={styles.body}>
        <TextInput
          style={[styles.input, isGstFocused && styles.focusedInput]}
          onChangeText={(text) => handleInputChange('gst', text)}
          onFocus={() => setIsGstFocused(true)}
          onBlur={() => setIsGstFocused(false)}
          value={formData.gst}
          placeholder="GST"
          keyboardType="default"
        />
        <TextInput
          style={[styles.input, isBillnameFocused && styles.focusedInput]}
          onChangeText={(text) => handleInputChange('billname', text)}
          onFocus={() => setIsBillnameFocused(true)}
          onBlur={() => setIsBillnameFocused(false)}
          value={formData.billname}
          placeholder="Bill Name"
          keyboardType="default"
        />
        {responseText&&<Text>{responseText}</Text>}
        <Pressable style={styles.button1} onPress={handleLogJSON}>
          <Text style={styles.text}>Retrieve Bill</Text>
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
    paddingBottom : 80 ,
    paddingTop : 40 ,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  focusedInput: {
    borderBottomColor: '#3498DB', // Blue underline color when focused
    borderBottomWidth: 2,
  },
  button1: {
    backgroundColor: '#3498DB', // Vibrant blue color
    height: 90,
    width: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#3498DB',
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
