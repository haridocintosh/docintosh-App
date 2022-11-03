import { View, Text, StyleSheet, Dimensions, TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const McqListModal = ({toggle, quizData, topicId}) => {
    const navigation = useNavigation();
    const filterId = quizData.filter(el => el.topic_id === topicId);
    
    const basicId = filterId[0].basic_id;
    console.log("filterId---------------------------------------------",filterId[0].title);
    const goToNext = () => {
        navigation.navigate("QuizGame", {basicId : basicId,title: filterId[0].title});
        // 
    toggle(false);
    }

    
  return (
    <>
    <TouchableOpacity style={styles.container} onPress={() => toggle(false)}/>
    <View style={styles.McqSelection}>
        <LinearGradient colors={[ '#50CDC7', '#15b3ac']} start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} 
            style={styles.cartGradiant}>
            <Text style={styles.mcqsListText}>{filterId[0]?.title}</Text>
            <AntDesign name="play" size={35} style={styles.playIcon} color={"#000128"}/>
            <TouchableOpacity style={styles.mcqStartBtn} onPress={() => goToNext()}>
              <Text style={styles.startText}>Let's Start</Text>
            </TouchableOpacity>
        </LinearGradient>
    </View>
  </>
  )
}

export default McqListModal;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
        borderWidth:1,
        position:'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex:1,
    },
    // innerContainer:{
    //     backgroundColor:'#D5F2E8',
    //     width:100,
    //     height:550,
    //     borderRadius:10,
    //     width:Dimensions.get("window").width/1.1,
    // },
    iconContainer:{
        padding:10,
        alignItems:'flex-end'
    },
    McqSelection:{
        padding:15,
        position:'absolute',
        top:'30%',
        zIndex:2,
        alignSelf:'center'
    },
    mcqsList:{
        padding:12,
        borderRadius:10,
        marginVertical:15,
        backgroundColor:"#15b3ac",
    },
    mcqsListText:{
        fontSize:15,
        textAlign:'center',
        fontWeight:'400',
    },
    cartGradiant:{
        // width:250,
        borderRadius:10,
        marginTop:10,
        justifyContent:'center',
        paddingHorizontal:20,
        padding:15,
        alignItems:'center'
    },
    playIcon:{
        margin:15,
        color:'#000128'
    },
    mcqStartBtn:{
        backgroundColor:"#2C8892",
        paddingHorizontal:60,
        paddingVertical:15,
        borderRadius:5
    },
    startText:{
        fontSize:16,
        color:"#fff",
        fontWeight:'600'
    }
})