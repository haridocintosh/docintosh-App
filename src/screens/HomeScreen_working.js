import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,TouchableOpacity,Linking,
} from 'react-native';
import { Card } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
// import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import p1 from '../assets/images/p1.png'; 
import icon from '../assets/images/Vector.png';
import verburger from '../assets/images/Vector1.png';
import heart from '../assets/images/hert.png';
import comment from '../assets/images/comment.png';
import send from '../assets/images/send.png';
import giftbox from '../assets/images/giftbox.png';
import oval from '../assets/dr-icon/Oval.png'
import dr1 from '../assets/dr-icon/dr1.png'
import img1 from '../assets/images/1.png'
import vd from '../assets/dr-icon/vd.png'
import mike from '../assets/dr-icon/mike.png'
import db from '../assets/dr-icon/db.png'
import faq from '../assets/dr-icon/comment.png'
import doctorImage from '../assets/dr-icon/d.png'
import discount1 from '../assets/dr-icon/discount1.png'

const HomeScreen = ()=> {
  const [gamesTab, setGamesTab] = useState(1);
  const navigation = useNavigation();

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
<SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{paddingHorizontal: 20,}}>
    <View style={styles.container}>
    <View style={{flexDirection:'row', marginTop:10, marginBottom:20}}>
    <View style={{backgroundColor:"#D0F0FF",width:144,height:48, marginLeft:20, borderRadius:20 / 2, }}>
    <Text style={{textAlign:'center', paddingTop:13,fontSize:16, fontWeight:'600' }}>782</Text>
    <Image style={{marginTop:-25,marginLeft:-11}} source={doctorImage}></Image>


</View>
 <View style={{backgroundColor:"#EFE7FF",width:144,height:48, borderRadius:20 / 2,marginLeft:61 }}>
 <Text style={{textAlign:'center', paddingTop:13,fontSize:16, fontWeight:'600' }}>7</Text>
 <Image  style={{marginTop:-25,marginLeft:-11}} source={discount1}></Image>

</View>
</View>

    <Card style={styles.topcrd}>
    <View style={styles.rowt}>

    <Image source={p1} style={styles.topprofile}></Image>
    <Text style={styles.toptext}>Whats on your mind ?</Text>
    </View>
   
   
    </Card>
    <Card style={styles.cardlg}>
    <View style={styles.rowt}>

    <Image source={p1} style={styles.profile}></Image>

    <View>  
    <Text style={styles.heading}>Dr. Jenifer Srivastav <Image source={icon}></Image></Text>    
    <Text style={styles.disgtxt}>Urology <Text>.4min ago</Text></Text>
    <Text style={styles.disgtxt}>All India Institute of Medicine</Text>
    </View> 
    <TouchableOpacity
      onPress={() => alert('Post')}
      >
      <Image source={verburger} style={styles.threedot}></Image>
    </TouchableOpacity>

    </View>
    </Card>
    
    <Text style={styles.actiivity}>Activities</Text>
   
   <View>
   <ScrollView
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   style={{  height:100, marginTop:10}}
   >
<View style={{flexDirection:'row', }}>
<View style={{backgroundColor:"#6BDE93",width:64,height:64, borderRadius:200 / 2, }}>
<Image style={styles.actiivityico1} source={vd}></Image>
<Text style={{marginTop:25,marginLeft:5,fontSize:12}}>Webinars</Text>

</View>
<View style={{backgroundColor:"#69C3EB",width:64,height:64, borderRadius:200 / 2 , marginLeft:10}}>
<Image style={styles.actiivityico2} source={mike}></Image>
<Text style={{marginTop:21,marginLeft:5,fontSize:12}}>Podcasts</Text>

</View>
<View style={{backgroundColor:"#E44F97",width:64,height:64, borderRadius:200 / 2,marginLeft:10}}>
<Image style={styles.actiivityico3} source={faq}></Image>
<Text style={{marginTop:18,marginLeft:18,fontSize:12}}>Polls</Text>

</View>
<View style={{backgroundColor:"#6BDED7",width:64,height:64, borderRadius:200 / 2,marginLeft:10}}>
<Image style={styles.actiivityico4} source={db}></Image>
<Text style={{marginTop:22,marginLeft:12,fontSize:12}}>Surveys</Text>
</View>
<View style={{backgroundColor:"#B097E7",width:64,height:64, borderRadius:200 / 2,marginLeft:10}}>
<Image style={styles.actiivityico4} source={db}></Image>
<Text style={{marginTop:22,marginLeft:12,fontSize:12}}>Surveys</Text>

</View>

</View>
   </ScrollView>
   <Card style={styles.card2}>
    <View style={styles.rowt}>

    <Image source={dr1} style={styles.profile}></Image>

    <View>  
    <Text style={styles.heading1}>Dr. Jenifer Srivastav <Image source={icon}></Image></Text>    
    <Text style={styles.disgtxt}>Urology <Text>.4min ago</Text></Text>
    <Text style={ {textAlign:'left',fontSize:10,fontWeight:"normal",paddingLeft:15, color:'blue'}}>Personal Post</Text>
    </View> 
   
    <TouchableOpacity
      onPress={() => alert('Post')}
      >
      <Image source={verburger} style={styles.threedot}></Image>

    </TouchableOpacity>
   
    </View>
    <View style={{marginTop:40, marginBottom:0}}>
   <Text style={styles.crd2content}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellent.<Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://aboutreact.com');
            }}>
          View more
          </Text>
    </Text>

   </View>
   <View style={{ flex: 1, flexDirection: 'row', marginTop:10}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:10, flexDirection:'row'}}>
              <Image source={heart}></Image><Text style={{paddingLeft:10}}>21k</Text>

              </View>
              <View style={{padding:10, flexDirection:'row'}}>
              <Image source={comment}></Image><Text style={{paddingLeft:10}}>2.1k</Text>

              </View>
              <View style={{padding:10, flexDirection:'row'}}>
              <Image style={{}}source={send}></Image><Text style={{paddingLeft:10}}>4k</Text>

              </View>
              <View style={{padding:10, flexDirection:'row'}}>
              <Image source={giftbox}></Image><Text style={{paddingLeft:10}}>2k</Text>

              </View>
               </View>
               </View>
               <View style={{flexDirection:'row',marginLeft:10 , marginBottom:1}}>
                <Image source={oval}></Image>
                <Image source={oval}></Image>
                {/* <Image source={oval}></Image> */}
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
    </Card>
   </View>
   <Card style={styles.card3}>
    <View style={styles.rowt}>

    <Image source={dr1} style={styles.profile}></Image>

    <View>  
    <Text style={styles.heading1}>Dr. Jenifer Srivastav <Image source={icon}></Image></Text>    
    <Text style={styles.disgtxt}>Urology <Text>.4min ago</Text></Text>
    <Text style={ {textAlign:'left',fontSize:10,fontWeight:"normal",paddingLeft:15, color:'blue'}}>Personal Post</Text>
    </View> 
   
    <TouchableOpacity
      onPress={() => alert('Post')}
      >
      <Image source={verburger} style={styles.threedot}></Image>

    </TouchableOpacity>
   
    </View>
    <View style={{marginTop:8, marginBottom:0}}>
   <Text style={styles.crd2content}>
   Lorem ipsum dolor sit amet.<Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://aboutreact.com');
            }}>
          View more
          </Text>
    </Text>
<Image source={img1} style={{alignSelf:'center',}}></Image>
   </View>
   <View style={{ flex: 1, flexDirection: 'row', marginTop:20}}>
              <View style={{ flexDirection: 'row',  }}>
              <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
              <View style={{padding:10, flexDirection:'row'}}>
             
              <Image source={heart}></Image><Text style={{paddingLeft:10}}>21k</Text>

              </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
              <View style={{padding:10, flexDirection:'row'}}>
             
              <Image source={comment}></Image><Text style={{paddingLeft:10}}>2.1k</Text>

              </View>
              </TouchableOpacity>
               <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
              <View style={{padding:10, flexDirection:'row'}}>
             
              <Image style={{}}source={send}></Image><Text style={{paddingLeft:10}}>4k</Text>

              </View>
              </TouchableOpacity>
               <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
              <View style={{padding:10, flexDirection:'row'}}>
             
              <Image source={giftbox}></Image><Text style={{paddingLeft:10}}>2k</Text>

              </View>
              </TouchableOpacity>
               </View>
               </View>
               <View style={{flexDirection:'row',marginLeft:10 , marginBottom:1}}>
                <Image source={oval}></Image>
                <Image source={oval}></Image>
                {/* <Image source={oval}></Image> */}
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
    </Card>
  </View>
  </ScrollView>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    body:{
//   width:320,
    },
  
    rowt:{
      flex: 1,
      flexDirection: 'row',
      paddingLeft:10
    },
    toptext:{
     textAlign:"center",
      top:14,
      left:20,
      fontSize:16,
      fontWeight:'400',
      lineHeight:19.36
    },
    topprofile:{
      width:32,
      height:32,
      borderRadius: 200 / 2 ,
      marginTop:8
      
     
    },
  // cards start here 
    topcrd:{
    //   width:320,
   height:48,
  marginBottom:16,
  borderRadius: 20 / 2 ,
  
    },
    cardlg:{
    //   width:320,
      height:400,
     marginBottom:16,
     borderRadius: 20 / 2 ,
      
    },
    card2:{
    //   width:320,
      height:200,
      marginTop:10
        },
        card3:{
          marginTop:20,
        //   width:320,
          height:661
            },
            // cards end here
    logo: {
      width: 300,
      height: 300,
      marginBottom: 20,
      
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
  
    heading:{
      textAlign:"center",
      fontWeight:"500",
      flexDirection:"row",
      marginTop:28,
      marginLeft:15,
      fontStyle:"normal",
      fontSize:14,
      lineHeight:13
    
    },
    profile:{
      width:50,
      height:50,
      flexDirection:"row",
      marginTop:20
      
    },
    disgtxt:{
  textAlign:'left',
  fontSize:10,
  fontWeight:"normal",
  paddingLeft:15,
  
    },
    threedot:{
      // width:8,
      // height:30,
      marginLeft:70,
      marginTop:25  
  
    },
    imgGrid:{
  marginTop:20,
  
    },
    // activity
  actiivityico1:{
  marginLeft:16,
  marginRight:20,
  marginTop:20,
  
  
  
  },
  actiivityico2:{
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    
    
    },
    actiivityico3:{
      marginLeft:15,
      marginRight:2,
      marginTop:15,
      
      
      },
      actiivityico4:{
        marginLeft:17,
        marginRight:20,
        marginTop:16,
        
        
        },
    actiivity:{
    fontSize:18,
    fontWeight:'600'
    },
  
  
    heading1:{
      textAlign:"center",
      fontWeight:"500",
      flexDirection:"row",
      marginTop:20,
      marginLeft:15,
      fontStyle:"normal",
      fontSize:14,
      lineHeight:13
    },
    hyperlinkStyle: {
      color: 'blue',
    },
    crd2content: {
    textAlign:'left',
    paddingLeft:10,
    paddingRight:10,
    fontWeight:'500',
    fontSize:14,
    color:"#687690"
  }
  });

export default HomeScreen
  