import React, { useEffect, useState } from 'react'
import { View, Text,Image,
  SafeAreaView,ScrollView,TouchableOpacity,ImageBackground,TextInput,StyleSheet } from 'react-native'
import {  Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 , MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import discount1 from '../assets/dr-icon/discount1.png';
import cardfootimg from '../assets/images/cardfootimg.png';
import QuizTimer from '../assets/images/QuizTimer.png';
import Surveys from '../assets/images/Surveys.png';
import cardfootimg2 from '../assets/images/cardfootimg2.png';
import cardfootimg3 from '../assets/images/cardfootimg3.png';
import checkwrong from '../assets/images/checkwrong.png';

const EngageScreen = () => {
  const navigation = useNavigation();
  const [userdata,setuserdata]=useState({
    role:""
  })

useEffect(() => {
    const userData = async () =>{
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data = await JSON.parse(jsonValue);
    const result=JSON.parse(data)['data'];
      setuserdata({ ...userdata, 
        role:`${result['role']}`
      });
    }
    userData();
  }, [])

  //   QuizLevels
  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
        style={{}}>
    <View style={{padding:10}}>
  
  <Card style={{borderRadius:20/2,  marginTop:10,backgroundColor:'#f7f8ff'}} onPress={() => navigation.navigate('QuizLevels')}>


  <View style={{ padding:10,flexDirection:'row',justifyContent:'space-between' }}>
   <View>
    <Text style={{fontSize:18, fontWeight:'800', color:"#404DB7", }}>Quiz</Text>
    <Text style={{ marginTop:10,fontFamily:'Inter-Regular',color:'#51668A'}}>
       Can you answer 10 questions in 60 {"\n"}seconds?
    </Text>
   </View >
     <Image source={QuizTimer} style={{width:68,height:79,marginRight:10}}/>
   </View>

    <View style={styles.cardfooterstyle}>
      <Image source={cardfootimg} style={styles.imgcolor} />
    </View>
   </Card>
   
   {/* <Card style={{borderRadius:20/2,  marginTop:10, backgroundColor:'#fffbfb'}} onPress={() => navigation.navigate('Polls')} >
  <View style={styles.infinity}>
      <View style={styles.infinityBefore} />
      <View style={styles.infinityAfter} />
    </View>
  <View style={{ padding:10, }}>
   <View>
    <Text style={{fontSize:18, fontWeight:'800', color:"#FE897B", position:'absolute'}}>
    Polls
    </Text>
    <Text style={{ paddingRight:100, marginTop:30}}>
    Lorem ipsum dolor sit amet, adipiscing elit.<Text style={{color:'#2376E5'}}>Read more</Text>
    </Text>
   </View>
   <View style={{alignSelf:'flex-end', paddingRight:10, marginTop:-55}}>
   <MaterialCommunityIcons name="comment-question" size={60} color="#FE897B" />
   </View>

  <View style={{marginTop:50, flexDirection:'row',}}>
    <Text  style={{color:'#51668A', fontSize:14, fontWeight:'400', marginTop:0}}>Till Now </Text>
    <View style={{marginTop:2, marginLeft:10}}>
     <Text style={{fontSize:13, marginTop:-1}}>Level :</Text>
    </View>
    <Text style={styles.paddingLeft}>4</Text>
    <View style={{marginTop:2, marginLeft:10}}>
      <Image source={d} style={{width:16, height:16}}></Image>
    </View>
    <Text style={styles.paddingLeft}>1027</Text>
    <View style={{marginTop:2, marginLeft:10}}>
      <Image source={discount1} style={{width:16, height:16}}></Image>
    </View>
    <Text style={styles.paddingLeft}>4</Text>
    
  </View>
  
   </View>
   <View style={styles.cardfooterstyle}>
    <Image source={cardfootimg1} style={styles.imgcolor} />
   </View>
   </Card> */}

   {userdata?((userdata.role <='4')?<>
   <Card style={{borderRadius:20/2,  marginTop:10, backgroundColor:'#f9ffff'}} onPress={()=>{ navigation.navigate('Surveys') }} >
    <View style={{ padding:10,flexDirection:'row',justifyContent:'space-between' }}>
    <View>
        <Text style={{fontSize:18, fontWeight:'800', color:"#008D85",}}>Surveys</Text>
        <Text style={{  marginTop:10,fontFamily:'Inter-Regular',color:'#51668A'}}>
          We appreciate your feedback.
        </Text>
    </View>
      <Image source={Surveys} style={{width:68,height:79,marginRight:10}}/>
    </View>
    <View style={styles.cardfooterstyle}>
      <Image source={cardfootimg2}  style={styles.imgcolor} />
    </View>
   </Card>

   {/* <Card style={{borderRadius:20/2,  marginTop:10, backgroundColor:'#f5fcff'}}  onPress={()=>{ navigation.navigate('SentimentixScreen') }}  >
  <View style={styles.infinity}>
      <View style={styles.infinityBefore} />
      <View style={styles.infinityAfter} />
    </View>
  <View style={{ padding:10, }}>
   <View>
    <Text style={{fontSize:18, fontWeight:'800', color:"#006592", position:'absolute'}}>
    Sentimetrix
    </Text>
    <Text style={{ paddingRight:100, marginTop:30}}>
    Lorem ipsum dolor sit amet, adipiscing elit.<Text style={{color:'#2376E5'}}>Read more</Text>
    </Text>
   </View>
   <View style={{alignSelf:'flex-end', paddingRight:10, marginTop:-55}}>
   <Image source={checkwrong} style={{zIndex:999}}></Image>
   </View>

  <View style={{marginTop:50, flexDirection:'row',}}>
    <Text  style={{color:'#51668A', fontSize:14, fontWeight:'400', marginTop:0}}>Till Now </Text>
    <View style={{marginTop:2, marginLeft:10}}>
     <Text style={{fontSize:13, marginTop:-1}}>Level :</Text>
    </View>
    <Text style={styles.paddingLeft}>4</Text>
    <View style={{marginTop:2, marginLeft:10}}>
      <Image source={d} style={{width:16, height:16}}></Image>
    </View>
    <Text style={styles.paddingLeft}>1027</Text>
    <View style={{marginTop:2, marginLeft:10}}>
      <Image source={discount1} style={{width:16, height:16}}></Image>
    </View>
    <Text style={styles.paddingLeft}>4</Text>
    
  </View>
  
   </View>
   <View style={styles.cardfooterstyle}>
    <Image source={cardfootimg3} style={styles.imgcolor}/>
   </View>
   </Card> */}
   </>
   :<Text></Text>):<Text></Text>}

</View>
   </ScrollView>
  </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  paddingLeft:{
  paddingLeft:10,
  },
  cardfooterstyle:{
    
  // zIndex:9999,
  marginTop:-80,

  },
  imgcolor:{
    width:'100%'
  }
 
 });
export default EngageScreen;