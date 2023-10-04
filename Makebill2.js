import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import ItemInput from './ItemInput';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Subfooter from './components/Subfooter.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import HomeScreen from './Home.js';
import { useRoute } from '@react-navigation/native';

const Makebill2 = ({ navigation }) => {
  const [itemList, setItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const route = useRoute();
  const { gst, number, billname , username, password} = route.params;
  const userid = username;
  const handleSave = (itemData) => {
    setItemList([...itemList, itemData]);
  };

  const [responseText, setResponseText] = useState(null);

  const handleGenerateJSON = () => {
    const jsonData = JSON.stringify({
      userid,
      gst,
      number,
      billname,
      data: Object.fromEntries(itemList.map((item) => [item.itemName, item.itemPrice])),
    });


    fetch('https://govtinvoice-server.onrender.com/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.text();
      })
      .then((responseData) => {
        setResponseText(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseText('Error occured');
      });

  };

  return (
    <View>
      <Header />
      <Nav />
      <View style={styles.basic}>
        <Text style={styles.title}>Item List:</Text>
      </View>
      {itemList.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>Name: {item.itemName}</Text>
          <Text>Price: {item.itemPrice}</Text>
        </View>
      ))}
      <ItemInput onSave={handleSave} />
      <Pressable onPress={handleGenerateJSON} style={styles.submitButton}>
    <Text style={{ color: 'white', textAlign: 'center' , fontSize: 25}}>Submit</Text>
  </Pressable>
      {responseText && <Text style={{alignSelf : 'center'}}>{responseText}</Text>}
      <Subfooter />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  basic: {
    alignItems: 'center',
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  itemContainer: {
    width: "30%",
    alignSelf: "center",
    backgroundColor: '#3498DB',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#3498DB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  submitButton: {
    fontSize: "40",
    width: "30%",
    alignSelf: "center",
    backgroundColor: '#27AE60',
    borderRadius: 5,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default Makebill2;
