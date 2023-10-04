// components/Header.js

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Header = () => {
  return (
    <View style={[styles.header,{
    flexDirection: 'row',},
    ]}>

        <Image
            style={styles.logo}
            source={{
                uri:'https://echallan.parivahan.gov.in/www/img/gov.png',}}
        />
        <Text style={styles.headerText}>Govt. Billing and Invoicing system</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
//    backgroundColor: '#94969E',
    backgroundColor:'#00CED1',
    padding: 20,
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-around',
//     flex:1,
//     justifyContent: 'center',


  },
  logo: {
    height: 80,
    width: 80,

  },
  headerText: {
    fontSize: 17,
    color: '#fff',
  },
});

export default Header;