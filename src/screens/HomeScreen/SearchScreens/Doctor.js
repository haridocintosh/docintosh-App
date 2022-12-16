import React,{useEffect} from 'react'
import { View, Text ,Image,SafeAreaView,ScrollView,Alert, Button,TouchableOpacity} from 'react-native';
import {Ionicons,AntDesign} from 'react-native-vector-icons';
const styelcss = require('../../../assets/css/style');

const Doctor = ({inputText}) => {
    const showAlert=()=>{
        alert();
      };
  return (
    <SafeAreaView style={styelcss.searchContainer} >
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
    >
       <View style={styelcss.communitySubDiv}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                <Image source={require('../../../assets/images/p2.png')} style={{width:50,height:50,borderRadius:50}}/>
                <View style={styelcss.doctorListContent}>
                    <Text style={{fontWeight:"600",fontSize:15}}>Dr. {inputText}</Text>
                    <Text style={styelcss.communittysubtxt}>Dermatology</Text>
                </View>
            </View>
            <TouchableOpacity>
                <AntDesign name="close" size={20} color={"#51668A"}/>
            </TouchableOpacity>
       </View>
       <View style={styelcss.communitySubDiv}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                <Image source={require('../../../assets/images/p2.png')} style={{width:50,height:50,borderRadius:50}}/>
                <View style={styelcss.doctorListContent}>
                    <Text style={{fontWeight:"600",fontSize:15}}>Dr. Jenifer Srivastav</Text>
                    <Text style={styelcss.communittysubtxt}>Dermatology</Text>
                </View>
            </View>
            <TouchableOpacity>
                <AntDesign name="close" size={20} color={"#51668A"}/>
            </TouchableOpacity>
       </View>
       <View style={styelcss.communitySubDiv}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                <Image source={require('../../../assets/images/p2.png')} style={{width:50,height:50,borderRadius:50}}/>
                <View style={styelcss.doctorListContent}>
                    <Text style={{fontWeight:"600",fontSize:15}}>Dr. Jenifer Srivastav</Text>
                    <Text style={styelcss.communittysubtxt}>Dermatology</Text>
                </View>
            </View>
            <TouchableOpacity>
                <AntDesign name="close" size={20} color={"#51668A"}/>
            </TouchableOpacity>
       </View>
       
    </ScrollView>
    </SafeAreaView>
  )
}

export default Doctor