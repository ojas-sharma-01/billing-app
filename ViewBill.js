import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Footer from './components/Footer.js';
import Subfooter from './components/Subfooter.js';
import Header from './components/Header.js';
import { useRoute } from '@react-navigation/native';


const ViewBillPage = () => {
  const route = useRoute();
  const {username, password, responseData} = route.params;
  const initialDetails = [
    { name: username, billno: responseData.id, gstno: responseData.gst},
  ];
  const initialBillItems = [
  ];
  delete responseData.id; delete responseData.gst; delete responseData.total_price;
  for (k in responseData) {
  var obj = {};
  obj.name = k;
  obj.price = Number(responseData[k]);
  initialBillItems.push(obj);
  }

  const [billItems, setBillItems] = useState(initialBillItems);
  const [billDetails] = useState(initialDetails);


  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text style={styles.header}>View Bill</Text>
        <View>
          <Text>Name: {billDetails[0].name}</Text>
          <View key={0}>
            <Text>Gst No: {billDetails[0].gstno}</Text>
            <Text>Bill No: {billDetails[0].billno}</Text>
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={billItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text style={styles.price}>{item.price.toFixed(2)}</Text>
            </View>
          )}
        />
        <Subfooter />
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  priceContainer: {
    backgroundColor: '#1F4172',
    padding: 10,
    color: 'white',
    width: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    backgroundColor:  '#1F4172',
    color: 'white',
    padding : 10,
    borderRadius : 5,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});



export default ViewBillPage;
