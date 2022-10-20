import React,{useEffect, useState} from 'react';
import { SafeAreaView,View,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSurveyQuestions, survayList } from '../../../redux/reducers/survaySlice';
import RadioMcq from './RadioMcq';
import TypoMcq from './TypoMcq';
import SurvayCheckBoxMcq from './SurvayCheckBoxMcq';




const SurveyMcq = ({route}) => {
  const [radioMcq,setRadioMcq] = useState([])
    const {surveyid} = route.params;
     const navigation = useNavigation();
     const dispatch =  useDispatch();

  const asyncFetchDailyData = async () => {
     const jsonValue = await AsyncStorage.getItem('USER_INFO');
     const data=await JSON.parse(jsonValue);
     const result = JSON.parse(data)['data'];
     fetchPostData(result.id, surveyid);
  }
     
     const fetchPostData = async (id,surveyid)=>{
     const postDetails = {surveyid:surveyid,id:id}
     const result = await dispatch(getSurveyQuestions(postDetails));
      console.log('getSurveyQuestions',result.payload.questions);
      setRadioMcq(result.payload.questions)
   }
 
    useEffect(()=>{
      asyncFetchDailyData();
    }, []);
  return (
  <SafeAreaView style={{flex:1}}>

          {/* {data.question_type == 3 && <TypoMcq/> } */}
    {/* <TypoMcq/>  */}
    
  </SafeAreaView>
  )
}

export default SurveyMcq