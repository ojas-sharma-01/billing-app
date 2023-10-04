import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
//    backgroundColor: '#2E2D2D',
    //backgroundColor:'#FFDAB9',
    padding: 10,
    alignItems: 'center',
    height: 40,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Footer;