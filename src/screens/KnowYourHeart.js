import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
   StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import reactangle from '../assets/images/Rectangle.png';
import reactangle1 from '../assets/images/Rectangle1.png';
import oval from '../assets/dr-icon/Oval.png';
import { FontAwesome5 } from '@expo/vector-icons';
import Path1 from '../assets/dr-icon/Path1.png';
import Path2 from '../assets/dr-icon/Path2.png';
import Path3 from '../assets/dr-icon/Path3.png';
import Path4 from '../assets/dr-icon/Path4.png';
import knowheart from '../assets/images/knowhert.png';
import d from '../assets/dr-icon/d.png';
import winner from '../assets/dr-icon/winner.png';
import king from '../assets/dr-icon/king.png';
import badge from '../assets/dr-icon/badge.png';
import badge1 from '../assets/dr-icon/badge1.png';
import { Button } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import UserAvatar from '../assets/images/p2.png';
// import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
//import { Button } from 'react-native-elements';

import { Card } from 'react-native-paper';

export default function KnowledgeScreen() {
  const [gamesTab, setGamesTab] = useState(1);
  const navigation = useNavigation();


  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{paddingHorizontal:0}}>
      <View>
      <Image source={knowheart} style={{width:'100%', height:230, marginTop:20}}></Image>
</View>
<Card style={{borderTopLeftRadius:20, borderTopRightRadius:20, margin:0, backgroundColor:'#ffff', shadowColor:"#000", shadowOpacity:0.3,
elevation:2, marginTop:-20, zIndex:1}}>
    <View style={{padding:1}}>
        <View>
            <Text style={{alignSelf:'center', fontSize:14, fontWeight:'500', marginTop:20}}>
            386 Coins Left to reach Level 5!!!
            </Text>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
       <View style={{paddingLeft:20, }}>
        <Image source={Path1}/>
        <Image source={badge} style={{marginLeft:0,  width:30, height:30, marginTop:-35, }}></Image>

        <View style={{}}>
            <Text>
            Beginner
            </Text>
            <View style={{flexDirection:'row'}}><Image source={d}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>
            
          
        </View>
       </View>
       <View style={{paddingLeft:20}}>
        <Image source={Path2}/>
        <Image source={winner} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}></Image>

        <View>
            <Text style={{alignSelf:'center'}}>
            Intermediate
            </Text>
            <View style={{flexDirection:'row'}}><Image source={d}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

        </View>
       </View>
       <View style={{paddingLeft:20}}>
        <Image source={Path3}/>
        <Image source={badge1} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}></Image>

        <View>
            <Text>
            Expert
            </Text>
            <View style={{flexDirection:'row'}}><Image source={d}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

        </View>
       </View>
       <View style={{paddingLeft:20}}>
        <Image source={Path4}/>
        <Image source={king} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}></Image>
        <View >
            <Text style={{marginBottom:1}}>
            Legend
            </Text>
            <View style={{flexDirection:'row'}}><Image source={d}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

        </View>
       </View>
        </View>
        <View style={{paddingLeft:20, backgroundColor:'#ffff', marginTop:10}}>
            <Text style={{fontSize:18, fontWeight:'600', marginBottom:10}}>
            Winners for this Challenge
            </Text>
            <View style={{flexDirection:'row',}}>
            <Text style={styles.count}>1</Text>
             <View>
                <Image style={{width:40, height:40}} source={UserAvatar}/>
             </View>
             <View style={styles.marginleft}>
                <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
             </View>
            </View>
            <View style={styles.margintop}></View>

            <View style={{flexDirection:'row'}}>
            <Text style={styles.count}>2</Text>

             <View>
                <Image style={{width:40, height:40}} source={UserAvatar}/>
             </View>
             <View style={styles.marginleft}>
                <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
             </View>
            </View>
            <View style={styles.margintop}></View>

            <View style={{flexDirection:'row'}}>
            <Text style={styles.count}>3</Text>

             <View>
                <Image style={{width:40, height:40}} source={UserAvatar}/>
             </View>
             <View style={styles.marginleft}>
                <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
             </View>
            </View>
            <View style={styles.margintop}></View>

            <View style={{flexDirection:'row'}}>
            <Text style={styles.count}>4</Text>

             <View>
                <Image style={{width:40, height:40}} source={UserAvatar}/>
             </View>
             <View style={styles.marginleft}>
                <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
             </View>
            </View>
            <View style={styles.margintop}></View>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.count}>5</Text>

             <View >
                <Image style={{width:40, height:40}} source={UserAvatar}/>
             </View>
             <View style={styles.marginleft}>
                <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
             </View>
            </View>
            <View>
                <Text style={{color:'blue', alignSelf:'center', marginTop:16}}>View All</Text>
            </View>
           
        </View>
        <Button
  title="Back to Categories"
 
  buttonStyle={{
    marginTop:30,
    bottom:10,
    width:"100%",
    height:48,
   alignSelf:'center',
                borderColor: '#fff',
                borderRadius:15/2,
                backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff'
              }}
              onPress={() => navigation.navigate('Engage1Screen')}
             
/>
    </View>
</Card>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    line:{
      borderWidth:1,
      borderColor:'#D5DEED',
      marginTop:17
  
    },
    listitemtst:{
        fontSize:14,
         fontWeight:'600',
          color:'#071B36',
         
    },
    count:{
     paddingRight:10,
     marginTop:10,
      
    },
    itemlisttxt2:{
      color:'#51668A',
       fontWeight:"400",
       fontSize:12,

    },
    margintop:{
      marginTop:20
    },
    marginleft:{
        marginLeft:20
    }
  
  })
