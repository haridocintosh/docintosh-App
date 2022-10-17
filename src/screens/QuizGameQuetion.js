import React, { useRef, useState, useEffect } from 'react'
import { View, Text,TouchableOpacity,StyleSheet, Dimensions,Modal,Animated } from 'react-native'
import * as Progress from 'react-native-progress';
import { COLORS } from '../components/constant';
import { useNavigation } from '@react-navigation/native';

const QuizGameQuetion = ({mcqQue}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showScoreModal, setShowScoreModal] = useState(false)
  const TotalMcq = parseInt(mcqQue.length);
  const navigation = useNavigation();

  const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, TotalMcq],
        outputRange: ['0%','100%']
    })
    // console.log(currentQuestionIndex);
    // console.log(TotalMcq);

const validateAnswer = (ans) =>{
  if(currentQuestionIndex !== TotalMcq-1){
    setCurrentQuestionIndex(currentQuestionIndex+1);
  }else{
    setShowScoreModal(true)
  }
  if(ans == 1){
    setScore(score+1);
  }
  Animated.timing(progress, {
    toValue: currentQuestionIndex+1,
    duration: 1000,
    useNativeDriver: false
}).start();
}

const restartQuiz = () => {
  setShowScoreModal(false);
  setCurrentQuestionIndex(0);
  setScore(0);
  navigation.navigate("QuizLevels");
}

const styling = {
  backgroundColor: "rgba(8, 1, 1, 0.05)",
  width:"100%",  
  marginTop:20,
  padding:10,
  borderRadius:10,
}

const outOff = currentQuestionIndex / TotalMcq;
// console.log("outOff",outOff);


  return (
    <View style={{marginTop:10}}>
          <View>
            <View style={{flexDirection:'row'}}>
              <Progress.Circle 
                unfilledColor={"#046B74"}
                size={60}
                color={"#A7DFCC"} 
                borderWidth={0} 
                thickness={5}
                progress={outOff ? outOff : 0} 
                style={styles.progressCircle}
                >
                  <Text style={{ fontSize:16, fontWeight:'600', position:'absolute'}}>{currentQuestionIndex+1}/{TotalMcq}</Text>
              </Progress.Circle>
                <Text style={styles.question}>{mcqQue[currentQuestionIndex]?.question_title}</Text>
            </View>
            {mcqQue[currentQuestionIndex]?.options.map((data, i) => {
              return(
                <TouchableOpacity  key={i} 
                  onPress={()=> validateAnswer(data.is_correct)}
                  style={styling}
                >
                  <Text style={styles.ans}>{data.options}</Text>
                </TouchableOpacity>
              )
            })}
          </View>

          <Modal animationType="slide" transparent={true} visible={showScoreModal}>
              <View style={styles.ModalContainer}>
                  <View style={styles.ModalCart}>
                      <Text style={styles.ModalGeet}>
                        { score > (TotalMcq/2) ? 'Congratulations!' : 'Oops!' }
                      </Text>
                      <View style={styles.ModalScore}>
                          <Text style={{fontSize: 30,color: score> (TotalMcq/2) ? COLORS.success : COLORS.error}}>
                              {score}
                          </Text>
                          <Text style={{fontSize: 20, color: COLORS.black}}>
                            / { TotalMcq }
                          </Text>
                      </View>
                      <TouchableOpacity onPress={restartQuiz} style={{ backgroundColor: COLORS.accent, padding: 20, width: '100%', borderRadius: 20 }}>
                          <Text style={{textAlign: 'center', color: COLORS.white, fontSize: 20}}>Retry Quiz</Text>
                      </TouchableOpacity>
                  </View>
              </View>
               </Modal>
        </View>
  )
}

export default QuizGameQuetion;

const styles = StyleSheet.create({
  question:{
     margin:15,
     fontSize:16,
     fontWeight:'600',
     color:'#071B36',
     alignSelf:'flex-start',
     paddingRight:10,
     width:Dimensions.get("window").width/1.3,
  },
  Qcard:{
      backgroundColor:'rgba(8, 1, 1, 0.05);',
      width:"100%",  
      marginTop:20,
      padding:10,
      borderRadius:10,
  },
  greecrd:{
       backgroundColor:'#42B93D45',
       width:"100%",  
       marginTop:20,
       borderRadius:10,
       padding:10,
       zIndex:3
  },
  ans:{
     alignSelf:'flex-start',
     padding:10,
     fontSize:16
  },
  progressCircle:{
     position:'relative',
     justifyContent:'center',
     alignItems:'center'
  },
  square: {
   width: "100%",
   height:Dimensions.get("window").height,
   backgroundColor: '#9CF0CF',
   position:'absolute',
   top:'-120%'
 },
 //modal CSS
 ModalContainer:{
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
 },
 ModalCart:{
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
},
  ModalGeet:{
    fontSize: 30, 
    fontWeight: 'bold'
  },
  ModalScore:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20
  }
 
  });