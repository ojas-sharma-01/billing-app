// components/Body.js

import React from 'react';
import { View, Text, Button, StyleSheet,Pressable } from 'react-native';

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Do your selections !!</Text>
      <Pressable style={styles.button1} onPress={() => alert('Button 1 pressed')}>
             <Text style={styles.text}>Make a Custom Bill</Text>
             <Text style={styles.text}>and</Text>
             <Text style={styles.text}>generate its invoice</Text>
       </Pressable>

      <Pressable style={styles.button2} onPress={() => alert('Button 1 pressed')}>
                   <Text style={styles.text}>Make a Custom Bill</Text>
                   <Text style={styles.text}>and</Text>
                   <Text style={styles.text}>generate its invoice</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  bodyText: {
    fontSize: 20,
    marginBottom: 20,


  },
  button1:{
    backgroundColor:"red",
    height:190,
    width:190,
    padding:20,
    paddingTop:65,
    alignItems: 'center',


  },
  button2:{
      marginTop: 20,
      backgroundColor:"black",
      height:190,
      width:190,
      padding:20,
      paddingTop:65,
      alignItems: 'center',


    }
});

export default Body;
