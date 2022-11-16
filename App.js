import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './src/navigation/AppNav';
// import { Provider } from 'react-redux';
import store from './redux/store';
import { Provider} from 'react-redux';
import { useFonts } from 'expo-font';

export default function App() {
const [fontsLoaded] = useFonts({
  "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
});

if (!fontsLoaded) {
  return null;
}

  return (
    <Provider store={store}>
      <AppNav/>
    </Provider>
  );
}



const styles = StyleSheet.create({
  
});


