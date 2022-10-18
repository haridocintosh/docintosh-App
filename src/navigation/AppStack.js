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
import EngageScreen from '../screens/EngageScreen';
import Knowledge2Screen from '../screens/Knowledge2Screen';
import Engage1Screen from '../screens/Engage1Screen';
import PostUpdateScreen from '../screens/PostUpdateScreen'
import ReportPost from '../screens/ReportPost'
import CreateCommunity from '../screens/CreateCommunity';
import LoginScreen from '../screens/LoginScreen';
import QuizGame from '../screens/QuizGame'
import SharePost from '../screens/SharePost'
import Polls from '../screens/Polls';
import Polls1 from '../screens/Polls1';
import Surveys from '../screens/Survay/Surveys';
import KnowYourHeart from '../screens/KnowYourHeart';
import Survey1 from '../screens/Survay/SurveyMcq';
import Survey2 from '../screens/Survay/SurvayCheckBoxMcq';
import SentimentixScreen from '../screens/SentimentixScreen';
import Sentimentixscreen2 from '../screens/Sentimentixscreen2';
import SentimentrixCong from '../screens/SentimentrixCong';
import Sentimentrix3 from '../screens/Sentimentrix3';
import Sentimentrix6 from '../screens/Sentimentrix6';
//import ThankYouScreen from '../screens/ThankYouScreen';
import FlowStart from '../screens/FlowStart';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import ProfileScreenFollowers from '../screens/ProfileScreen/ProfileScreenFollowers';
import ProfileScreenFollowing from '../screens/ProfileScreen/ProfileScreenFollowing';
//import PaymentScreen from '../screens/PaymentScreen';
//import CommunityCreatedefault from '../screens/CommunityCreatedefault';






const Drawer = createDrawerNavigator();

const AuthStack = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTintColor:'#45B5C0' ,
        drawerActiveBackgroundColor: '#45B5C0',
        drawerActiveTintColor: '#fff',      
        drawerInactiveTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#071B36',
          width: 304,
        },
        drawerLabelStyle: {
          marginLeft: -25,
         //fontFamily: 'Inter_900Black',
          fontSize: 15,
        },
      }}
      >

      <Drawer.Screen
        name="Leaderboard"
        component={TabNavigator}
        options={{headerShown: true,
          drawerIcon: () => (
            <Ionicons name="trophy-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
        
      />

    <Drawer.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false,
          drawerIcon: () => (
            <Ionicons name="trophy-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
     }}
        
      />
      <Drawer.Screen
        name="Invite"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-add-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Gift DocCoins"
        component={MessagesScreen}
        options={{
        
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Take a Tour"
        component={MomentsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="timer-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Business Page"
        component={MomentsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Engage1Screen"
        component={Engage1Screen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          // headerShown:true,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          // headerShown:true,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="Knowledge2Screen"
        component={Knowledge2Screen}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="PostUpdateScreen"
        component={PostUpdateScreen}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="ReportPost"
        component={ReportPost}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="CreateCommunity"
        component={CreateCommunity}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       {/* <Drawer.Screen
        name="CommunityCreatedefault"
        component={CommunityCreatedefault}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
        <Drawer.Screen
        name="QuizGame"
        component={QuizGame}
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> */}
       <Drawer.Screen
        name="SharePost"
        component={SharePost}
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Polls"
        component={Polls}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Surveys"
        component={Surveys}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> */}
        <Drawer.Screen
        name="KnowYourHeart"
        component={KnowYourHeart}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Survey1"
        component={Survey1}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="Survey2"
        component={Survey2}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> */}
       {/* <Drawer.Screen
        name="Polls1"
        component={Polls1}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> 
      <Drawer.Screen
        name="SentimentixScreen"
        component={SentimentixScreen}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="Sentimentixscreen2"
        component={Sentimentixscreen2}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       <Drawer.Screen
        name="SentimentrixCong"
        component={SentimentrixCong}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
         <Drawer.Screen
        name="Sentimentrix3"
        component={Sentimentrix3}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
        <Drawer.Screen
        name="Sentimentrix6"
        component={Sentimentrix6}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />*/}
         {/* <Drawer.Screen
        name="ThankYouScreen"
        component={ThankYouScreen}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      /> */}
       <Drawer.Screen
        name="FlowStart"
        component={FlowStart}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
       {/* <Drawer.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        
        options={{
          headerShown:false,
          drawerIcon: () => (
            <Ionicons name="md-document-text-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
        */}
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />

      <Drawer.Screen
        name="ProfileScreenFollowers"
        component={ProfileScreenFollowers}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileScreenFollowing"
        component={ProfileScreenFollowing}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} style={{color:'#ffff',paddingRight:5}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
