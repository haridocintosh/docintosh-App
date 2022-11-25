import React from 'react';
import { StyleSheet, Text, LogBox } from 'react-native';
import AppNav from './src/navigation/AppNav';
// import { Provider } from 'react-redux';
import store from './redux/store';
import { Provider} from 'react-redux';
import { useFonts } from 'expo-font';

export default function App() {
  // LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
  // LogBox.ignoreAllLogs();

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


