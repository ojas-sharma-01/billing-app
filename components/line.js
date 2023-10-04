// import { StatusBar } from "expo-status-bar";
import * as React from 'react';
 import { useState } from "react";
 import {
   KeyboardAvoidingView,
   Text,
   View,
   ScrollView,
   TextInput,
   TouchableOpacity,
   StatusBar,
   Platform,
   Keyboard,
   SafeAreaView, StyleSheet,
   Pressable
 } from "react-native";
import { StackActions } from '@react-navigation/native';


 import Todo from "./components/Todo.js";
 import Footer from './components/Footer.js';
 import Subfooter from './components/Subfooter.js';
 import Nav from './components/Nav.js';
 import Header from './components/Header.js'
 import Makebill from './Makebill.js';

 const TextInputExample = ({navigation,route}) => {
   const [text, onChangeText] = React.useState('Useless Text');
   const [name, onChangeName] = React.useState('');
   const [number, onChangeNumber] = React.useState('');
   const [bill, onChangeBill] = React.useState('');

   return (






        <ScrollView>
              <Header />
              <Nav />
              <SafeAreaView style={styles.body}>

                     <TextInput
                       style={styles.input}
                       onChangeText={onChangeName}
                       value={name}
                       placeholder="Name"
                       keyboardType="numeric"
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
                              value={bill}
                              placeholder="Bill No."
                              keyboardType="numeric"
                            />



                      <Pressable style={styles.button1} onPress={() => navigation.navigate("Makebill")}>
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
    alignItems: "center",

   },

   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
   button1:{
       backgroundColor:"black",
       height:90,
       width:90,
       padding:20,
       paddingTop:30,
       marginTop: 20,

       alignItems: 'center',
     },
     text: {
         color: 'white',
       },
 });

 export default TextInputExample;