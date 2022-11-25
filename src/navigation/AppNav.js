import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
//import store from './redux/store';
import { useSelector} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';


export default function AppNav() {
const [data, setdata] = useState();
const [loader, setLoader] = useState(false);
const Stack = createNativeStackNavigator();

// let loading = useSelector((state)=>{
//   //console.log(state);
//   return state.mylogin.loading;
// });

// let usertoken = useSelector((state)=>{
//   //console.log(state);
//   return state.mylogin.usertoken;
// });

if(loader){
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
      <ActivityIndicator size={'large'} />
  </View>)
}

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      // console.log(jsonValue);
      setdata(jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null)
    } catch(e) {
     //console.log(e)
    }
}
useEffect(() => {
    setLoader(true);
    getData('USER_INFO');
    setLoader(false);
  }, [])
  const islogin =data?data.login:null;
  return (
    <NavigationContainer>
        {islogin ? <AppStack/>:<AuthStack/>}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
