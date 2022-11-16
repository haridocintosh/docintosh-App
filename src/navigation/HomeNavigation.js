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
import Knowledge2Screen from '../screens/Knowledge2Screen';
import SharePost from '../screens/HomeScreen/postScreen/SharePost';
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
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import McqSelection from '../screens/QuizLevels/McqSelection';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileScreenFollowers from '../screens/ProfileScreen/ProfileScreenFollowers';
import ProfileScreenFollowing from '../screens/ProfileScreen/ProfileScreenFollowing';
import MultipleImagesUpload from '../screens/MiltipleImageUpload/MultipleImagesUpload';
import TypoMcq from '../screens/Survay/TypoMcq';
import KnowYourHeart from '../screens/QuizLevels/KnowYourHeart';
import QuizGame from '../screens/QuizLevels/QuizGame';
import ScratchOffer from '../screens/Survay/ScratchOffer';
import ThankYouPage from '../screens/Survay/ThankYouPage';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostsScreen from '../screens/HomeScreen/PostsScreen';
import CommentsScreen from '../screens/HomeScreen/CommentsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';



const HomeNavigation = () => {

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="Home">
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
            options={{headerShown: true,
              title: "Create post",
              headerStyle: {
                backgroundColor: '#071B36',
              },
              headerTintColor: '#fff'
            }}
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
          <Stack.Screen
            name="MessagesScreen"
            component={MessagesScreen}
            options={{headerShown: true,  
              title: "Comments",
              headerStyle: {
                backgroundColor: '#071B36',
              },
              headerTintColor: '#fff'}}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{headerShown: true,  
              title: "Comments",
              headerStyle: {
                backgroundColor: '#071B36',
              },
              headerTintColor: '#fff'}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: true,  
              title: "Comments",
              headerStyle: {
                backgroundColor: '#071B36',
              },
              headerTintColor: '#fff'}}
          />
     
          
        </Stack.Navigator>
      );
}

export default HomeNavigation