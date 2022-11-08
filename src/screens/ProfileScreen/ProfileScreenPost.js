import { View, Text, SafeAreaView,ScrollView,Image,StyleSheet } from 'react-native'
import React from 'react';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import grid1 from '../../assets/images/grid1.png'
import grid3 from '../../assets/images/grid3.png'
import grid4 from '../../assets/images/grid4.png'
import grid5 from '../../assets/images/grid5.png'
import oval from '../../assets/dr-icon/Oval.png'
import profileimg from '../../assets/images/p2.png';
import { FontAwesome5,FontAwesome,Feather } from '@expo/vector-icons';
import icon from '../../assets/images/Vector.png';
import ThreeDots from '../../assets/svg-icons/three-dots.svg';
import { styles } from './profilestyle';
const ProfileScreenPost = () => {
  return (
    <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
         <Card style={{ margin:15, padding:10, borderRadius:10}}>
            <View style={styles.postUserDetils}>
              <View style={styles.postUserDetilsLhs} >
               <Image source={profileimg}  style={styles.profileimg}/>
                <View style={{marginTop:0,}}>
                <Text style={styles.profileName}>Dr. Kiran Y. <Image source={icon}/></Text>  
                  <View style={{flexDirection:'row',marginTop:3}}>
                  <Ionicons name="md-earth" size={18} color="#45B5C0" />  
                     <View style={styles.dot}/>
                  <Text style={{fontSize:12, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                    Cardiologist 
                  </Text>
                      <View style={styles.dot}/>
                    <Text style={{marginLeft:5,fontSize:12, fontWeight:'400', fontFamily:"Inter-Regular"}}>8min ago</Text>
                  </View>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black"/>
            </View>

            <Text style={styles.paratxt}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur. 
              <Text style={{color:'#2376E5', fontFamily:"Inter-Regular"}}>#new_venture </Text> 
            </Text>

            <View style={{marginBottom:50}}>
              <Image source={grid1} style={{width:'100%', alignSelf:'center'}}/>
              <View style={{backgroundColor:'#45B5C0', borderRadius:50/2, width:30, height:30, padding:2,marginTop:-80,alignSelf:'center', shadowColor:'#000', zIndex:1}}>
                 <AntDesign name="caretright" size={24} color="#fff"  />
              </View>
            </View>
            
            <View style={{flexDirection:'row',marginTop:10,flex:1, justifyContent:'space-between'}}>
                <View style={{}}>
                  <Image source={grid3} style={{ width:105}}/>
                  <View style={styles.careticon}>
                  <AntDesign name="caretright" size={24} color="#fff"  />
                </View>
                </View>

                <View style={{}}>
                <Image source={grid4} style={{ width:105}}/>
                <View style={styles.careticon}>
                <AntDesign name="caretright" size={24} color="#fff"  />
                </View>

                </View>
                <View>
                <Image source={grid5} style={{ width:105}}/>
                <View style={styles.plusthree}>
                  <Text style={{color:'#fff',fontSize:20,fontWeight:'900',fontFamily:"Inter-Regular"}}>3+</Text>
                </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',marginTop:10 }}>
                <View style={{ flexDirection:'row', marginRight:10}}>
                  <FontAwesome name="heart" size={22} color="red" />
                  <Text style={{paddingLeft:10,color:'#51668A',fontFamily:"Inter-Regular"}}>21k</Text>
                </View>
                <View style={{ flexDirection:'row',marginRight:10}}>
                  <FontAwesome5 name="comment-alt" size={22} color="black" />
                  <Text style={{paddingLeft:10,color:'#51668A',fontFamily:"Inter-Regular"}}>2.1k</Text>
                </View>
                <View style={{flexDirection:'row',marginRight:10}}>
                  <FontAwesome name="send" size={22} color="black" />
                  <Text style={{paddingLeft:10,color:'#51668A',fontFamily:"Inter-Regular"}}>4k</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:'row',marginTop:10, marginBottom:10}}>
                <Image source={oval} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5,fontFamily:"Inter-Regular"}}>Liked by Kunal Patel and 44,686 others</Text>
            </View>
                    
        </Card>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreenPost