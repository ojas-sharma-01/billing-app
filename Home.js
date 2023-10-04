import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet, View, Image } from 'react-native';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Subfooter from './components/Subfooter.js';
import Footer from './components/Footer.js';
import Prebill from './Prebill.js';
import Retrievebill from './Retrievebill.js';
import { useRoute } from '@react-navigation/native';

const Home = ({ navigation }) => {

  const route = useRoute();
  const { username, password } = route.params;

  const handleButtonPress = (screenName) => {
      navigation.navigate(screenName, {username, password});
  };


  const buttons = [
    {
      text: 'My Profile',
      imageSource: require('./assets/user.png'),
      screenName: 'Profile',
    },
    {
      text: 'Create Bill',
      imageSource: require('./assets/invoice.png'),
      screenName: 'Prebill',
    },
    {
      text: 'View your Invoices',
      imageSource: require('./assets/icons8-transaction-history-64.png'),
      screenName: 'Retrievebill',
    },
  ];

  return (
    <ScrollView>
      <View>
        <Header />
        <Nav />
        <View style={styles.body}>
          {/*<Text style={styles.bodyText}>Welcome! Make your selections below:</Text>*/}
          <View style={styles.buttonRow}>
            {buttons.map((button, index) => (
              <View
                key={index}>
                <Pressable
                style={({ pressed }) => [
                            styles.button,
                            {
                              backgroundColor: pressed ? 'lightblue' : '#007AFF',
                              shadowColor: '#3498DB',
                                                 shadowOffset: {
                                                   width: 0,
                                                   height: 8,
                                                 },
                                                 shadowOpacity: pressed ? 0.8 : 0.5,
                                                 shadowRadius: 10,
                                                 elevation: pressed ? 12 : 10,
                            },
                          ]}
                onPress={() => handleButtonPress(button.screenName)}
              >
                <Image
                  source={button.imageSource}
                  style={styles.buttonImage}
                /></Pressable>
                <Text style={styles.buttonText}>{button.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <Subfooter />
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#2C3E50',
  },
  buttonText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 buttonRow: {
     flexDirection: 'row',
     justifyContent: 'center',
     flexWrap: 'wrap',
     marginBottom: 20,
   },
   button: {
     backgroundColor: '#3498DB',
     height: 130,
     width: 130,
     marginLeft: 18,
     marginTop: 20,
     marginRight: 17,
     marginBottom: 20,
     padding: 30,
     borderRadius: 80,
     alignItems: 'center',
     justifyContent: 'center',
     shadowColor: '#3498DB',
     shadowOffset: {
       width: 0,
       height: 8,
     },
     shadowOpacity: 0.5,
     shadowRadius: 10,
     elevation: 15,
   },
 buttonImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});

export default Home;
