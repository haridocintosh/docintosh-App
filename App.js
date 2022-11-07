import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import AppNav from './src/navigation/AppNav';
// import { Provider } from 'react-redux';
import store from './redux/store';
import { Provider} from 'react-redux';
import { useFonts } from 'expo-font';

export default function App() {
const [data, setdata] = useState();

const [fontsLoaded] = useFonts({
  "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),

  "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),

  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),

  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
});

if (!fontsLoaded) {
  return null;
}


 // const getData = async (key) => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       setdata(jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null)
//     } catch(e) {
//      //console.log(e)
//     }
// }
// useEffect(() => {
//     getData('USER_INFO')
//   })
  const islogin =data?data.login:null;
  return (
   <Provider store={store}>
    {/* <NavigationContainer>
    {islogin?<AppStack />:<AuthStack />}
    </NavigationContainer> */}
    <AppNav/>
    </Provider>
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


