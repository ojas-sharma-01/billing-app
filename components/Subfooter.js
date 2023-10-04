import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Footer = () => {
  return (
    <View style={[styles.footer,{
        flexDirection: 'column',},
        ]}>
        <Image
                  style={styles.logo}
                  source={{
                  uri:'https://echallan.parivahan.gov.in/www/img/gov.png',}}
              />
      <View>
        <Text style={styles.headerText}>Ministry Of Commerce</Text>
      </View>
      <View>
        <Text style={styles.headerText2}>Govt. Of India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 120,
    backgroundColor:'#00CED1',
    marginTop:53,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
      height: 60,
      width: 60,

    },
});

export default Footer;