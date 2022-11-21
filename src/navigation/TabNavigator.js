import React,{useRef} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import logo from '../assets/images/logo.png';
import Animated from 'react-native-reanimated';
import Engage from '../assets/dr-icon/Engage.png'
import Knowledge from '../assets/dr-icon/Knowledge.png'
import Community from '../assets/dr-icon/Community.png'
import HomeNavigation from './HomeNavigation';
import EngageNavigation from './EngageNavigation';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
   // console.log(tabOffsetValue);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#071B36',
          height:60
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily:'Inter-SemiBold',
          paddingBottom:5
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#95AACE',
      })}
     >

      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={() => ({
            tabBarLabel:'Home',
            tabBarIcon: () => (<Image source={logo} style={{width: 25, height: 35}} />),
        })} 
      />

      <Tab.Screen
        name="Engage"
        component={EngageNavigation}
        options={{
          tabBarLabel:'Engage',
          tabBarIcon: () => (<Image source={Engage} style={{width:35,height:35,padding:10}} />),
        }}
      />


      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (
            // <Feather name="users" color={color} size={size} />
            <Image source={Community} style={{width:30,height:30}} />
          ),
        }}
      
      />
       <Tab.Screen
        name="Knowledge"
        component={KnowledgeScreen}
        options={{
          headerShown: true,  
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff',
          title: 'Knowledge',
          tabBarIcon: ({color, size}) => (
            // <Ionicons name="person-outline" color={color} size={size} />
            <Image source={Knowledge} style={{width:30,height:30}} />
          ),
        }}
      />
     
    </Tab.Navigator>

  );
};



export default TabNavigator;