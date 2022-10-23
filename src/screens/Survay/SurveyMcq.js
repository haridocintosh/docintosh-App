import React,{useEffect, useState} from 'react';
import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSurveyQuestions, saveSurveyAnswers } from '../../../redux/reducers/survaySlice';
import RadioMcq from './RadioMcq';
import TypoMcq from './TypoMcq';
import SurvayCheckBoxMcq from './SurvayCheckBoxMcq';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar, Checkbox} from 'react-native-paper';


const SurveyMcq = ({route}) => {

  const [allMCQs,setAllMCQs] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [liftUpData, setLiftUpData] = useState(null);
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
     const data = await result.payload.questions
    //  console.log("data",data);
     setAllMCQs(data);
  }

  // console.log("allMCQs.length-1",allMCQs.length-1);
  // console.log("allMCQs.length",allMCQs.length);

  //-----------------save survay ans--------------------------
  const nextMcq = async (basic_id, qid) =>{
    if(currentQuestionIndex !== allMCQs.length){
      const jsonValue = await AsyncStorage.getItem('USER_INFO');
      const data=await JSON.parse(jsonValue);
      const result=JSON.parse(data)['data'];
      // console.log("result",result);
      PosData(result.id,basic_id,qid, liftUpData, result.profileimage,);
      setCurrentQuestionIndex(currentQuestionIndex+1);
      setLiftUpData(null);
    }
  }

  const prevMcq = () =>{
    if(currentQuestionIndex > 0){
      setCurrentQuestionIndex(currentQuestionIndex-1);
    }
  }

  const PosData = async (id,basic_id,qid,opt_id,profileimage)=>{
    const postDetails = {id:id,basic_id:basic_id,qid:qid,opt_id:opt_id,profileimage:profileimage}
    const result = await dispatch(saveSurveyAnswers(postDetails));
    // console.log('postDetails===',result);
  }

  useEffect(()=>{
    asyncFetchDailyData();
  }, []);

  const outOff = currentQuestionIndex / allMCQs.length;
  return (
  <SafeAreaView style={{flex:1}}>
    <View style={{padding:15}}>
        <View style={styles.TopScoreContainer}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.OutOff}>{currentQuestionIndex+1 > 9 ? currentQuestionIndex+1:`0${currentQuestionIndex+1}`} </Text> 
            <Text style={styles.OutOffTotal}>/{allMCQs.length+1}</Text> 
          </View>
          <View style={styles.NexrPrevIcons}>
            <TouchableOpacity style={{marginRight:15}} onPress={() => prevMcq()}>
              <AntDesign name="leftcircle" size={25} color="#2C8892"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconStyle} 
            onPress={() => nextMcq(allMCQs[currentQuestionIndex]?.basic_id,allMCQs[currentQuestionIndex]?.qid)}>
              <AntDesign name="rightcircle" size={25} color="#2C8892"/>
            </TouchableOpacity>
          </View>
        </View>
        {/* score bar */}
        <ProgressBar 
            style={styles.Progressbar}
            color={"#45B5C0"} 
            progress={outOff?outOff:0}
        />
    </View>    

        

      {
        allMCQs[currentQuestionIndex]?.question_type == 3 && 
        <TypoMcq 
          setLiftUpData={setLiftUpData} 
          currentIndex={currentQuestionIndex}
          allMCQs={allMCQs}
          length={liftUpData}
        /> 
      } 


      {
      allMCQs[currentQuestionIndex]?.question_type == 2 && 
      <SurvayCheckBoxMcq 
        setLiftUpData={setLiftUpData}  
        currentIndex={currentQuestionIndex}
        allMCQs={allMCQs}
      /> 
      } 


      {
      allMCQs[currentQuestionIndex]?.question_type == 1 && 
      <RadioMcq 
        setLiftUpData={setLiftUpData}  
        currentIndex={currentQuestionIndex}
        allMCQs={allMCQs}
        nextMcq={nextMcq}
      /> 
      } 
  </SafeAreaView>
  )
}

export default SurveyMcq;
const styles = StyleSheet.create({
 
  OutOff:{
    fontSize:20,
    fontWeight:'700'
  },
  OutOffTotal:{
    fontSize:20,
  },
  NexrPrevIcons:{
    flexDirection:'row',
  },
  TopScoreContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:15
  },
  Progressbar:{
    width:"100%",
    borderRadius:7,
    height:6,
  },

})