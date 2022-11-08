import React,{useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,TouchableOpacity,FlatList
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BaseNavigationContainer, getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from '@react-navigation/native';
import EngageScreen from '../screens/EngageScreen';
import CommunityScreen from '../screens/CommunityScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import Knowledge2Screen from '../screens/Knowledge2Screen';
import logo from '../assets/images/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SharePost from '../screens/SharePost';
import Polls from '../screens/Polls';
import Polls1 from '../screens/Polls1';
import Surveys from '../screens/Survay/Surveys';
import SurveyMcq from '../screens/Survay/SurveyMcq';
import SurvayCheckBoxMcq from '../screens/Survay/SurvayCheckBoxMcq';
import SentimentixScreen from '../screens/SentimentixScreen';
import Sentimentixscreen2 from '../screens/Sentimentixscreen2';
import SentimentrixCong from '../screens/SentimentrixCong';
import Sentimentrix3 from '../screens/Sentimentrix3';
import Sentimentrix6 from '../screens/Sentimentrix6';
import CommonSearchScreen from '../screens/CommonSearchScreen';
import Animated from 'react-native-reanimated';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import McqSelection from '../screens/QuizLevels/McqSelection';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileScreenFollowers from '../screens/ProfileScreen/ProfileScreenFollowers';
import ProfileScreenFollowing from '../screens/ProfileScreen/ProfileScreenFollowing';
import MultipleImagesUpload from '../screens/MiltipleImageUpload/MultipleImagesUpload';
import TypoMcq from '../screens/Survay/TypoMcq';
import KnowYourHeart from '../screens/QuizLevels/KnowYourHeart';
import QuizGame from '../screens/QuizLevels/QuizGame';
import QuizGameQuetion from '../screens/QuizLevels/QuizGameQuetion';
import ScratchOffer from '../screens/Survay/ScratchOffer';
import ThankYouPage from '../screens/Survay/ThankYouPage';
import Engage from '../assets/dr-icon/Engage.png'
import Knowledge from '../assets/dr-icon/Knowledge.png'
import Community from '../assets/dr-icon/Community.png'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HomeNavbar from '../screens/HomeScreen/HomeNavbar';
import PostsScreen from '../screens/HomeScreen/PostsScreen';
import CommentsScreen from '../screens/HomeScreen/CommentsScreen';






const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false,
          headerTintColor: '#fff'}}
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
        options={{headerShown: false}}
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
        options={{headerShown: true,
          title: 'Quize Game',
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
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
      options={{headerShown: true,
        headerStyle: {
          backgroundColor: '#071B36',
        },
        headerTintColor: '#fff'}}
      // options={({route}) => ({
      //   title: route.params?.title,
      // })}
    />

    <Stack.Screen
      name="SurveyMcq"
      component={SurveyMcq}
      options={{headerShown: true,  
      title: 'Surveys',
      headerStyle: {
        backgroundColor: '#071B36',
      },
      headerTintColor: '#fff'}}     
    />

    <Stack.Screen
      name="SurvayCheckBoxMcq"
      component={SurvayCheckBoxMcq}
      options={{headerShown: false}}
      // options={({route}) => ({
      //   title: route.params?.title,
      // })}
    />

    <Stack.Screen
      name="TypoMcq"
      component={TypoMcq}
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
          title: 'Sentimetrix',
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
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
          title: 'Sentimetrix',
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
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
          title: 'Search',
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      
      <Stack.Screen
        name="QuizLevels"
        component={QuizLevels}
       
        options={{headerShown: true,  
          title: 'Quiz Levels', 
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="McqSelection"
        component={McqSelection}
        options={{headerShown: false,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="ProfileScreenFollowers"
        component={ProfileScreenFollowers}
        options={{headerShown: false,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="ProfileScreenFollowing"
        component={ProfileScreenFollowing}
        options={{headerShown: false,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="MultipleImagesUpload"
        component={MultipleImagesUpload}
        options={{headerShown: false,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="KnowYourHeart"
        component={KnowYourHeart}
        options={{headerShown: true, 
          title: 'Know Your Heart', 
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="ScratchOffer"
        component={ScratchOffer}
        options={{headerShown: false,  
          title: 'Search'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="ThankYouPage"
        component={ThankYouPage}
        options={{headerShown: true,  
          title: 'Survey',
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{headerShown: true,  
          title: "Post's",
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />

      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{headerShown: true,  
          title: "Comments",
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff'}}
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
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff', 
          title: 'Engage',
          tabBarLabel: 'Engage',
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Image source={Engage} style={{width:40,height:40}} />
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
          headerShown: true,
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (
            // <Feather name="users" color={color} size={size} />
            <Image source={Community} style={{width:35,height:35}} />
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
          headerStyle: {
            backgroundColor: '#071B36',
          },
          headerTintColor: '#fff',
          title: 'Knowledge',
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            // <Ionicons name="person-outline" color={color} size={size} />
            <Image source={Knowledge} style={{width:35,height:35}} />
            

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