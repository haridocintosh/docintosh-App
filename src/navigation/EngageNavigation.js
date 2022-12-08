import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizLevels from '../screens/QuizLevels/QuizLevels';
import McqSelection from '../screens/QuizLevels/McqSelection';
import KnowYourHeart from '../screens/QuizLevels/KnowYourHeart';
import QuizGame from '../screens/QuizLevels/QuizGame';
import ScratchOffer from '../screens/Survay/ScratchOffer';
import SurvayCheckBoxMcq from '../screens/Survay/SurvayCheckBoxMcq';
import SurveyMcq from '../screens/Survay/SurveyMcq';
import Surveys from '../screens/Survay/Surveys';
import ThankYouPage from '../screens/Survay/ThankYouPage';
import TypoMcq from '../screens/Survay/TypoMcq';
import EngageScreen from '../screens/EngageScreen';
import { Text } from 'react-native';

const EngageNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="EngageScreen">
        <Stack.Screen name="EngageScreen" component={EngageScreen} options={{headerShown: true,  
            title: 'Engage', 
            headerStyle: { backgroundColor: '#071B36', },
            headerTintColor: '#fff'}}/>
        <Stack.Screen name="QuizLevels" component={QuizLevels} options={{headerShown: true,  
            title: 'Quiz Levels', 
            headerStyle: { backgroundColor: '#071B36', },
            headerTintColor: '#fff'}}/>
        <Stack.Screen name="McqSelection" component={McqSelection} options={{headerShown: false,  
            title: 'Search'}}/>
        <Stack.Screen name="KnowYourHeart" component={KnowYourHeart} options={{headerShown: true, 
            title: 'Know Your Heart', 
            headerLeft: () => <Text/>,
            headerStyle: {backgroundColor: '#071B36'},
            headerTintColor: '#fff'}}/>
        <Stack.Screen name="QuizGame" component={QuizGame} options={{headerShown: true,
            title: 'Quize Game',
            headerStyle: { backgroundColor: '#071B36'},
            headerTintColor: '#fff'}} />
        <Stack.Screen name="ScratchOffer" component={ScratchOffer} options={{headerShown: false, 
            title: 'Search'}}/>
        <Stack.Screen name="SurvayCheckBoxMcq" component={SurvayCheckBoxMcq} options={{headerShown: false}}/>
        <Stack.Screen name="SurveyMcq" component={SurveyMcq} options={{headerShown: true,  
            title: 'Surveys',
            headerStyle: { backgroundColor: '#071B36' },
            headerTintColor: '#fff'}} />
        <Stack.Screen name="Surveys" component={Surveys} options={{headerShown: true,
            headerStyle: { backgroundColor: '#071B36'},
            headerTintColor: '#fff'}} />
        <Stack.Screen name="ThankYouPage" component={ThankYouPage} options={{headerShown: true,  
            title: 'Survey',
            headerStyle: {backgroundColor: '#071B36'},
            headerTintColor: '#fff'}}/>
        <Stack.Screen name="TypoMcq" component={TypoMcq} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default EngageNavigation