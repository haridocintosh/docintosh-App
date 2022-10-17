import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BaseNavigationContainer, getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import EngageScreen from '../screens/EngageScreen';
import CommunityScreen from '../screens/CommunityScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import Knowledge2Screen from '../screens/Knowledge2Screen';
import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/images/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SharePost from '../screens/SharePost';
import QuizGame from '../screens/QuizGame';
import Polls from '../screens/Polls';
import Polls1 from '../screens/Polls1';
import Surveys from '../screens/Surveys';
import Survey1 from '../screens/Survey1';
import Survey2 from '../screens/Survey2';
import SentimentixScreen from '../screens/SentimentixScreen';
import Sentimentixscreen2 from '../screens/Sentimentixscreen2';
import SentimentrixCong from '../screens/SentimentrixCong';
import Sentimentrix3 from '../screens/Sentimentrix3';
import Sentimentrix6 from '../screens/Sentimentrix6';
import CommonSearchScreen from '../screens/CommonSearchScreen';
import { Dimensions, Image} from "react-native";
import { useRef } from 'react';
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
// import { View } from 'react-native-web';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Knowledge2Screen"
        component={Knowledge2Screen}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
        
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
        <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        // options={({route}) => ({
          
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="SharePost"
        component={SharePost}
        options={{headerShown: false}}
        // options={({route}) => ({
          
        //   title: route.params?.title,
        // })}
      />
       <Stack.Screen
        name="QuizGame"
        component={QuizGame}
        options={{headerShown: false}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

    <Stack.Screen
        name="Polls"
        component={Polls}
        options={{headerShown: false}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

    <Stack.Screen
        name="Polls1"
        component={Polls1}
        options={{headerShown: false}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

    <Stack.Screen
      name="Surveys"
      component={Surveys}
      options={{headerShown: true}}
      // options={({route}) => ({
      //   title: route.params?.title,
      // })}
    />

    <Stack.Screen
      name="Survey1"
      component={Survey1}
      options={{headerShown: true,  title: 'Surveys',}}     
    />

    <Stack.Screen
      name="Survey2"
      component={Survey2}
      options={{headerShown: false}}
      // options={({route}) => ({
      //   title: route.params?.title,
      // })}
    />

    <Stack.Screen
      name="SentimentixScreen"
      component={SentimentixScreen}
      options={{headerShown: true,  
        title: 'Sentimetrix'}}
      // options={({route}) => ({
      //   title: route.params?.title,
      // })}
    />

      <Stack.Screen
        name="Sentimentixscreen2"
        component={Sentimentixscreen2}
        options={{headerShown: true,  
          title: 'Sentimetrix'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="SentimentrixCong"
        component={SentimentrixCong}
        options={{headerShown: true,  
          title: 'Sentimetrix'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="Sentimentrix3"
        component={Sentimentrix3}
        options={{headerShown: true,  
          title: 'Sentimetrix'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="Sentimentrix6"
        component={Sentimentrix6}
        options={{headerShown: true,  
          title: 'Sentimetrix'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="CommonSearchScreen"
        component={CommonSearchScreen}
        options={{headerShown: true,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />




    </Stack.Navigator>
  );
};

const TabNavigator = () => {
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#071B36'},
        tabBarInactiveTintColor: '#95AACE',
        tabBarActiveTintColor: '#fff',
      
      }}
     >

      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
            tabBarLabel:'Home',
            tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#071B36',
          },
            tabBarIcon: () => (<Image source={logo} style={{width: 24, height: 40}} />),
        })} listeners ={({ navigation, route })=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue,{
              toValue:getWidth(),
              useNativeDriver:true
            }).start();
          }
        })

        }
      />
      <Tab.Screen
        name="Engage"
        component={EngageScreen}
        options={{headerShown: true,  
          title: 'Engage',
          tabBarLabel: 'Engage',
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather name="target" color={color} size={size} />
          ),
        }}
        listeners ={({navigation, route})=>({
          tabPress: e =>{
            Animated.spring(tabOffsetValue, {
              toValue:0,
              useNativeDriver:true
            }).start();
          }
        })

        }
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="users" color={color} size={size} />
          ),
        }}
        listeners ={({navigation, route})=>({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue:getWidth(),
              useNativeDriver:true
            }).start();
          }
        })

        }
      />
       <Tab.Screen
        name="Knowledge"
        component={KnowledgeScreen}
        options={{
          headerShown: true,  
          title: 'Knowledge',
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
            

          ),
          
        }}
        listeners ={({navigation, route})=>({
          tabPress: e=>{
            Animated.spring(tabOffsetValue, {
              toValue:getWidth() * 3,
              useNativeDriver:true
            }).start();
          }
        })

        }
       
      />
     
    </Tab.Navigator>
    <Animated.View
    style={{backgroundColor:'#45B5C0', 
    width:getWidth() - 20, 
    height:4, 
    position:'absolute',
    bottom:48,
    left:30,
    borderRadius:20,
    transform:[
      { translateX: tabOffsetValue}
      ]
    }}>

    </Animated.View>

    </NavigationContainer>
   
  );
};
function getWidth(){
  let width = Dimensions.get("window").width

  // horizontal padding 
  width = width  - 80
  return width / 4
}
const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;