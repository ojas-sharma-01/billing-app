// import { StatusBar } from "expo-status-bar";
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
   StyleSheet,
   Button,
   Keyboard,
 } from "react-native";
 import Todo from "./components/Todo.js";
 import Footer from './components/Footer.js';
 import Subfooter from './components/Subfooter.js';
 import Nav from './components/Nav.js';
 import Header from './components/Header.js';

 const Makebill = ({ navigation }) => {
   const [todo, settodo] = useState();
   const [todoItems, settodoItems] = useState(["Water", "Devcomm", "Ieee Shirt"]);

   const [Price, setPrice] = useState();
   const [todoPrice, settodoPrice] = useState(["10 Rs", "Infinity", "109 Rs"]);

   const handleAddtodo = () => {
     if (todo === null) return;
     Keyboard.dismiss();
     settodoItems([...todoItems, todo]);


   };
   const handleAddtodoPrice = () => {
        if (Price === null) return;
        Keyboard.dismiss();
        settodoPrice([...todoPrice, Price]);


   };

   const completetodoPrice = (index) => {
     let itemsCopy = [...todoPrice];
     itemsCopy.splice(index, 1);
     settodoPrice(itemsCopy);

     let itemsCopy2 = [...todoItems];
     itemsCopy2.splice(index, 1);
     settodoItems(itemsCopy2);
   };

   const completetodo = (index) => {
        let itemsCopy = [...todoItems];
        itemsCopy.splice(index, 1);
        settodoItems(itemsCopy);

        let itemsCopy2 = [...todoPrice];
        itemsCopy2.splice(index, 1);
        settodoPrice(itemsCopy2);

      };

    const handleSubmit = () => {
        const jsonObject = {
          todo: todo,
          Price: Price,
        };


        // Now you can do something with the jsonObject
        console.log(jsonObject);
      };



   return (
     <View style={styles.content}>

       <Header />
       <Nav />
       <View style={styles.body}>
        <ScrollView
                 contentContainerStyle={{
                   flexGrow: 1,
                 }}
                 keyboardShouldPersistTaps="handled"
               >
                 <View className="py-4" >
                   <Text className="text-5xl">Today's Items</Text>
                   <View className="mt-5">
                     {todoItems.map((item, index) => {
                       return (
                         <TouchableOpacity
                           key={index}
                           onPress={() => completetodo(index)
                           }

                         >
                           <Todo key={index} text={item} />
                         </TouchableOpacity>
                       );
                     })}
                   </View>

                   <View
                     style={{
                       borderBottomColor: 'black',
                       borderBottomWidth: StyleSheet.hairlineWidth,
                     }}
                   />
                   <View
                     style={{
                       borderBottomColor: 'black',
                       borderBottomWidth: StyleSheet.hairlineWidth,
                     }}
                   />
                   <View
                     style={{
                       borderBottomColor: 'black',
                       borderBottomWidth: StyleSheet.hairlineWidth,
                     }}
                   />



                   <View className="mt-5" >
                                              {todoPrice.map((item, index) => {
                                                return (
                                                  <TouchableOpacity
                                                    key={index}
                                                    onPress={() => completetodoPrice(index)

                                                        }
                                                  >
                                                    <Todo key={index} text={item} />
                                                  </TouchableOpacity>
                                                );
                                              })}
                   </View>

                 </View>
               </ScrollView>




               <KeyboardAvoidingView
                 behavior={Platform.OS === "ios" ? "padding" : "height"}
                 className="absolute bottom-0 space-x-3 py-5 px-3 w-full flex flex-row justify-around items-center"
               >
                 <TextInput
                   className="flex-grow bg-gray-300 text-black p-4 text-base rounded-lg"
                   placeholder={"Item Name"}
                   value={todo}
                   onChangeText={(text) => settodo(text)}


                 />
                 <TouchableOpacity onPress={() => handleAddtodo()}>
                   <View className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-400">
                     <Text className="text-3xl">+</Text>
                   </View>
                 </TouchableOpacity>
               </KeyboardAvoidingView>


               <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        className="absolute bottom-0 space-x-3 py-5 px-3 w-full flex flex-row justify-around items-center"
                      >
                        <TextInput
                          className="flex-grow bg-gray-300 text-black p-4 text-base rounded-lg"
                          placeholder={"Its Price"}
                          value={Price}
                          onChangeText={(text) => setPrice(text)}

                        />
                        <TouchableOpacity onPress={() => handleAddtodoPrice()}>
                          <View className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-400">
                            <Text className="text-3xl">+</Text>
                          </View>
                        </TouchableOpacity>
                      </KeyboardAvoidingView>
        </View>
        <Button title="Submit" onPress={handleSubmit} />


       <Subfooter />
       <Footer />

     </View>
   );
 }

 const styles = StyleSheet.create({
    body: {

     alignItems: 'center',
    },


   content: {

     backgroundColor: "#F3F4F6",
     paddingTop: StatusBar.currentHeight,
     display: "flex",
     flexGrow: 1,
   }


 });

 export default Makebill;