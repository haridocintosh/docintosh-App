import React,{useEffect, useState} from 'react'
import{ View, Text ,useWindowDimensions,Image,TextInput,Animated,Alert, Button,TouchableOpacity}from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'; 
import { useNavigation } from '@react-navigation/native';
import Doctor from './Doctor';
import Community from './Community';
import Speciality from './Speciality';
import Page from './Page';
const styelcss = require('../../../assets/css/style');
import {Ionicons,AntDesign} from 'react-native-vector-icons';
import Voice from '@react-native-voice/voice';



const CommonSearchScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [inputText,setInputText] = useState(null);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first',  title: 'Doctor'},
    { key: 'second', title: 'Community' },
    { key: 'third',  title: 'Speciality' },
    { key: 'fourth', title: 'page' },
  ]); 

  const FirstRoute = () => {
    return(
      <Doctor inputText={inputText}/>
    )
  };
  const SecondRoute = () => { 
    return(
      <Community/>
    )
  };
  const ThirdRoute = () => {
    return(
      <Speciality/>
    )
  };
  const fourthRoute = () => {
    return(
      <Page/>
    )
  }
  
  const renderScene = SceneMap({
    first  : FirstRoute,
    second : SecondRoute,
    third  : ThirdRoute,
    fourth : fourthRoute,
  });

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styelcss.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.3
            ),
          });

          return (
            <TouchableOpacity
              style={styelcss.tabItem}
              onPress={() => setIndex({ index: i })}>
                <Animated.Text style={{ opacity,fontFamily:"Inter-SemiBold"}}>
                  {route.title}
                </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  const onChangeText =  (val) =>{
    setInputText(val)
  }
  const emptyField =  () =>{
    setInputText(null)
  }
  const startVoice = async () =>{
    await Voice.start("en-US");
    console.log("startVoice");
  }

return (
  <>
    <View style={styelcss.headerContainer}>
      <TouchableOpacity>
         <Ionicons name="arrow-back" size={25} color={"#fff"}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1,paddingHorizontal:10}}>
      <TextInput
          placeholder={"Search"}
          style={{fontSize:18,color:"#fff"}}
          placeholderTextColor={'#fff'}
          onChangeText={onChangeText}
          value={inputText}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={inputText ? () => emptyField() : () => startVoice()}>
        <Ionicons name={inputText ? "close-outline":"mic"} size={24} color={"#fff"}/>
      </TouchableOpacity>
    </View>
    
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, fontSize:10}}
      swipeEnabled={true}
      renderTabBar={renderTabBar}
    />
  </>
)
}
export default CommonSearchScreen