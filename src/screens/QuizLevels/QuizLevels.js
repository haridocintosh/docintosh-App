import { View, Text , TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './QuizLevelaStyles';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {  Card } from 'react-native-paper';
import axios from 'axios';
import { mainApi } from '../../apis/constant';
import { useNavigation } from '@react-navigation/native';
import McqListModal from './McqListModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { quizPostData } from '../../../redux/reducers/mcqSlice';

const QuizLevels = () => {
    const [toggle, setToggle] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [topicId, setTopicId] = useState(null);
    const navigation = useNavigation();

    const dispatch = useDispatch();
    
    const McqDataHandle = (topicId) => {
        setToggle(true);
       // console.log("topicId",topicId);
        setTopicId(topicId);
    }
  
const asyncFetchDailyData = async () => {
  const jsonValue = await AsyncStorage.getItem('USER_INFO');
  const data=await JSON.parse(jsonValue);
  const result=JSON.parse(data)['data'];

  fetchPostData(result['role'],result['city_id'], result['assoc_id'], result['circle_type'], result['id'])
 }
 
 const fetchPostData = async (role,city_id,assoc_id,circle_type,userId)=>{
 const postDetails = {role,city_id,assoc_id,circle_type,userId}
 const result = await dispatch(quizPostData(postDetails));
  // console.log('jdjdbj',result.payload.mcq_data);
 setQuizData(result.payload.mcq_data);
}

    useEffect(()=>{
      asyncFetchDailyData();
    }, [])

  return (
    <View style={styles.container}>
    {toggle && <McqListModal toggle={setToggle} quizData={quizData} topicId={topicId}/>}
      {/* <LinearGradient colors={['transparent', '#08A099']} style={styles.circleView}/> */}

    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        
     {quizData.reverse().map((user, index) => {  
          return(
            <TouchableOpacity onPress={() => McqDataHandle(user.topic_id)} key={index}>
              <LinearGradient colors={[ '#43c5bf', '#15b3ac']} start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} style={styles.cartGradiant}>
                  <Text style={styles.cartText}>{user.topic}</Text>
              </LinearGradient>
            </TouchableOpacity>
           )
          }
        )}
        </ScrollView>

    </View>
  )
}

export default QuizLevels;