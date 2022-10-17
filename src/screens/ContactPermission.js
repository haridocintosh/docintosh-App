import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Contacts from 'expo-contacts';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ContactPermission() {

  const navigation = useNavigation();
  const [contactList, setContact]= useState('');
  const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
}

  useEffect(() => {
    async function getPrermission(){
      const { status } = await Contacts.requestPermissionsAsync();
      if(status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

         if(data.length > 0) {
         const isSelected=false;
        const contact = data;
          setContact(contact);
          // storeData('contactList',JSON.stringify({data}))  
          //  //console.log(contact);
          // setContact(contact);
         }
      }
    }
    getPrermission();
  }, []);

  const [loaded] = useFonts({
    'Intel': require('../assets/fonts/Inter-Regular.ttf'),
    'plus-jakarta' : require('../assets/fonts/PlusJakartaSans-Regular.ttf')
  });

  if(!loaded) {
    return null;
  }

 
  const handleSubmit = async()=>{
    navigation.navigate('InvitePeers',{
      alluserContact :contactList,
  }) 
    
 };
  return (
    <View style={styles.container}>
      {/* <Text>{contactList.length}</Text> */}
    <Text style={{fontSize:24, fontWeight:"700", color:"#071B36",paddingTop:180, fontFamily: 'Intel', textAlign:"center" }}>Find your friends already on Docintosh</Text>
    <View style={{position:"absolute",bottom:0,width:"100%",alignSelf:"center",}}>
    <CustomButton label={'Follow'} style={{ marginBottom:70, backgroundColor:"red" }} onPress={() => handleSubmit() } />
    <Text style={{fontFamily: "plus-jakarta", fontWeight:"700", color: "#2376E5", fontSize:14, fontStyle:"normal", textAlign:"center", marginBottom:12,marginTop:-16}} onPress={() => handleSubmit() } >Select Manually</Text>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
  height:"100%",
    backgroundColor: '#fff',
    paddingHorizontal:20,
    position:"relative",
    width:"100%"

  },
});