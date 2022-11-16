import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';


const Drawer = createDrawerNavigator();

const AuthStack = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown: true,
        headerTintColor:'#45B5C0' ,
        drawerActiveBackgroundColor: '#45B5C0',
        drawerActiveTintColor: '#fff',      
        drawerInactiveTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#071B36',
          width: 325,
        },
        drawerLabelStyle: {
          // marginLeft: -25,
          //fontFamily: 'Inter_900Black',
          fontSize: 15,
        },
      }}
      >

      <Drawer.Screen
        name="Leaderboard"
        component={TabNavigator}
        options={{headerShown: false,
          drawerIcon: () => (
            <Ionicons name="trophy-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
        
      />

 
      <Drawer.Screen
        name="Invite"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-add-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gift DocCoins"
        component={MessagesScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Take a Tour"
        component={MomentsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="timer-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="What’s New"
        component={MomentsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="timer-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Business Page"
        component={MomentsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Engage1Screen"
        component={Engage1Screen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      /> */}
      
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} style={{color:'#ffff'}} />
          ),
        }}
      />

      
    </Drawer.Navigator>
  );
};

export default AuthStack;
