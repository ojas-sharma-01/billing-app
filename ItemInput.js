import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Pressable,Text } from 'react-native';

const ItemInput = ({ onSave }) => {
  const [itemData, setItemData] = useState({
    itemName: '',
    itemPrice: '',
  });



  const handleInputChange = (key, value) => {
    setItemData({ ...itemData, [key]: value });
  };

  const handleSubmit = () => {
    onSave(itemData);

    // Clear the input fields if needed
    setItemData({
      itemName: '',
      itemPrice: '',
    });
  };

  return (
    <View style={styles.basic}>
      <TextInput
        placeholder="Item Name"
        value={itemData.itemName}

        onChangeText={(text) => handleInputChange('itemName', text)}
      />
      <TextInput
        placeholder="Item Price"
        value={itemData.itemPrice}

        onChangeText={(text) => handleInputChange('itemPrice', text)}
      />

      <Pressable style={styles.button1} onPress={handleSubmit}>
                                 <Text style={styles.text}>Add Item</Text>
                           </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  basic: {
    margin: 15,

    alignItems: 'center',
  },
  text: {
  color:'white'},

  button1: {
  backgroundColor: 'black',
  padding:10,
  marginTop: 10}
  })

export default ItemInput;
