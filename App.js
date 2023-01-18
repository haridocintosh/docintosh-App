import React, { useState, useEffect, useRef } from 'react';
import AppNav from './src/navigation/AppNav';
import store from './redux/store';
import { Provider} from 'react-redux';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { LogBox} from 'react-native';
import { registerForPushNotificationsAsync } from './src/screens/PushNotification';
import * as Application from 'expo-application';


const App = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    });
    console.log('AppVersionnn',Application.applicationId);
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

    
  }, []);

  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();

const [fontsLoaded] = useFonts({
  "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
});

if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNav/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;



 

