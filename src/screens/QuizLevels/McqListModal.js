import { View, Text, StyleSheet, Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const McqListModal = ({toggle, quizData, topicId}) => {
    const navigation = useNavigation();

    const filterId = quizData.filter(el => el.topic_id === topicId);
    const basicId = filterId[0].basic_data.map(data => data.basic_id);

    const goToNext = (singleMcq) => {
        navigation.navigate("QuizGame", {basicId : basicId, singleMcq: singleMcq});
        toggle(false);
    }

    
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
                <AntDesign name="closecircleo" size={25} onPress={() => toggle(false)}/>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnable={true}
                style={{}}>
            <View style={styles.McqSelection}>
                {filterId[0].basic_data.reverse().map((innerData, index)=>{
                    return(
                        <TouchableOpacity style={styles.mcqsList} onPress={() =>goToNext(innerData.basic_id)} key={index}>
                            <Text style={styles.mcqsListText}>{innerData.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            </ScrollView>
        </View>
      <Text>McqListModal</Text>
    </View>
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
        alignItems:'center',
        justifyContent:'center'
    },
    innerContainer:{
        backgroundColor:'#D5F2E8',
        width:100,
        height:550,
        borderRadius:10,
        width:Dimensions.get("window").width/1.1,
    },
    iconContainer:{
        padding:10,
        alignItems:'flex-end'
    },
    McqSelection:{
        padding:15
    },
    mcqsList:{
        padding:12,
        borderRadius:10,
        marginVertical:15,
        backgroundColor:"#15b3ac",
    },
    mcqsListText:{
        fontSize:18,
        color:'#fff',
        textAlign:'center',
        fontWeight:'500',
    }
})