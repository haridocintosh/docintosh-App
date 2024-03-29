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


const App = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  // OneSignal Initialization

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log("response",response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  // const notificationSetup= async()=>{
  //   const deviceState = await OneSignal.getDeviceState();
  //   console.log("deviceState",deviceState);
  // }

  LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();

const [fontsLoaded] = useFonts({
  "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
});

if (!fontsLoaded) return null;
  // OneSignal.promptForPushNotificationsWithUserResponse();
  // //Method for handling notifications received while app in foreground
  // OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  //   console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  //   let notification = notificationReceivedEvent.getNotification();
  //   console.log("notification: ", notification);
  //   const data = notification.additionalData
  //   console.log("additionalData: ", data);
  //   // Complete with null means don't show a notification.
  //   notificationReceivedEvent.complete(notification);
  // });

  // //Method for handling notifications opened
  // OneSignal.setNotificationOpenedHandler(notification => {
  //   console.log("OneSignal: notification opened:", notification);
  // });

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNav/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

 

