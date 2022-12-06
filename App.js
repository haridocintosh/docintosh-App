import React, { useEffect } from 'react';
import { Alert, BackHandler, LogBox } from 'react-native';
import AppNav from './src/navigation/AppNav';
import store from './redux/store';
import { Provider} from 'react-redux';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';


const App = () => {
  LogBox.ignoreLogs(['Warning: ...','Require cycle:']); 
  LogBox.ignoreAllLogs();


  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


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
      <NavigationContainer ref={navigationRef}>
        <AppNav/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;