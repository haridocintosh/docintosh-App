import React,{useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Knowledge2Screen from '../screens/Knowledge2Screen';
import SharePost from '../screens/HomeScreen/postScreen/SharePost';
import Polls from '../screens/Polls';
import Polls1 from '../screens/Polls1';
import SentimentixScreen from '../screens/SentimentixScreen';
import Sentimentixscreen2 from '../screens/Sentimentixscreen2';
import SentimentrixCong from '../screens/SentimentrixCong';
import Sentimentrix3 from '../screens/Sentimentrix3';
import Sentimentrix6 from '../screens/Sentimentrix6';
import CommonSearchScreen from '../screens/CommonSearchScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ProfileScreenFollowers from '../screens/ProfileScreen/ProfileScreenFollowers';
import ProfileScreenFollowing from '../screens/ProfileScreen/ProfileScreenFollowing';
import MultipleImagesUpload from '../screens/MiltipleImageUpload/MultipleImagesUpload';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostsScreen from '../screens/HomeScreen/PostsScreen';
import CommentsScreen from '../screens/HomeScreen/CommentsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { showHeaderItemOnSkip } from './ReuseLogics';
import ContactPermission from '../screens/ContactPermission';
import WhatsNew from '../screens/HomeScreen/What\'s New/What\'sNew';




const HomeNavigation = () => {

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, headerTintColor: '#fff'}} />
          <Stack.Screen name="Knowledge2Screen" component={Knowledge2Screen} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: true,
              headerStyle: { backgroundColor: '#071B36'},
              headerTintColor: '#fff',
              title: 'Profile'}} />
          <Stack.Screen name="Polls" component={Polls} options={{headerShown: false}} />
          <Stack.Screen name="Polls1" component={Polls1}  options={{headerShown: false}} />
          <Stack.Screen name="SentimentixScreen" component={SentimentixScreen} options={{headerShown: true,  
              title: 'Sentimetrix'}}/>
          <Stack.Screen name="ProfileScreenFollowers" component={ProfileScreenFollowers} options={{headerShown: true, 
              headerStyle: { backgroundColor: '#071B36'},
              headerTintColor: '#fff', 
              title: 'Followers'}}/>
          <Stack.Screen name="ProfileScreenFollowing" component={ProfileScreenFollowing} options={{headerShown: true,  
              headerStyle: { backgroundColor: '#071B36'},
              headerTintColor: '#fff',
              title: 'Following'}}/>
          <Stack.Screen name="MultipleImagesUpload" component={MultipleImagesUpload} options={{headerShown: false,  
              title: 'Search'}}/>
          <Stack.Screen name="SentimentrixCong" component={SentimentrixCong} options={{headerShown: true,  
              title: 'Sentimetrix'}}/>
          <Stack.Screen name="Sentimentrix6" component={Sentimentrix6} options={{headerShown: true,  
              title: 'Sentimetrix'}}/>
          <Stack.Screen name="Sentimentixscreen2" component={Sentimentixscreen2} options={{headerShown: true,  
              title: 'Sentimetrix',
              headerStyle: { backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen  name="SharePost" component={SharePost} options={{headerShown: true,
              title: "Create post",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff' }} />
          <Stack.Screen name="Sentimentrix3" component={Sentimentrix3} options={{headerShown: true,  
              title: 'Sentimetrix',
              headerStyle: { backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen name="CommonSearchScreen" component={CommonSearchScreen} options={{headerShown: true,  
              title: 'Search',
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen name="PostsScreen" component={PostsScreen} options={{headerShown: true,  
              title: "Post's",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen name="CommentsScreen" component={CommentsScreen} options={{headerShown: true,  
              title: "Comments",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}} />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{headerShown: true,  
              title: "Comments",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: true,  
              title: "Comments",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown: true,  
              title: "Edit Profile",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
          <Stack.Screen name='insideContactPermission' component={ContactPermission}  options={{ title: 'Invite Peers' , headerShown: true,
      
            }} />
          <Stack.Screen name="WhatsNew" component={WhatsNew} options={{headerShown: true,  
              title: "What's New",
              headerStyle: {backgroundColor: '#071B36'},
              headerTintColor: '#fff'}}/>
        </Stack.Navigator>
      );
}

export default HomeNavigation