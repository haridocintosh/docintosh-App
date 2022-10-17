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
                  <Text style={{fontSize:12, fontWeight:'400'}}>
                    Cardiologist 
                  </Text>
                      <View style={styles.dot}/>
                    <Text style={{marginLeft:5,fontSize:12, fontWeight:'400'}}>8min ago</Text>
                  </View>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black"/>
            </View>

            <Text style={{paddingTop:10,paddingBottom:12, color:'#51668A'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur. 
              <Text style={{color:'#2376E5'}}>#new_venture </Text> 
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
                  <Text style={{color:'#fff',fontSize:20,fontWeight:'900'}}>3+</Text>
                </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',marginTop:10 }}>
                <View style={{ flexDirection:'row', marginRight:10}}>
                  <FontAwesome name="heart" size={22} color="red" />
                  <Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>
                </View>
                <View style={{ flexDirection:'row',marginRight:10}}>
                  <FontAwesome5 name="comment-alt" size={22} color="black" />
                  <Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>
                </View>
                <View style={{flexDirection:'row',marginRight:10}}>
                  <FontAwesome name="send" size={22} color="black" />
                  <Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:'row',marginTop:10, marginBottom:10}}>
                <Image source={oval} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
            </View>
                    
        </Card>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreenPost;

const styles = StyleSheet.create({
 
    box1:{
       backgroundColor:'#FFF',
      borderBottomWidth:1,
      width:150,
       marginLeft:20,
       alignSelf:'center'
    },
    box2:{
      backgroundColor:'#FFF',
      marginLeft:50,width:150, 
       alignItems:'center',
       height:50,
    },
   
      cardlg:{
       height:400,
       marginBottom:16,
       borderRadius: 20 / 2 ,
        
      },
      careticon:{
        backgroundColor:'#45B5C0',
         borderRadius:50/2,
         width:30,
         height:30,
         padding:2,
         marginTop:-60,
         marginBottom:30,
        alignSelf:'center',
         shadowColor:'#000',
         zIndex:1
      },
      plusthree:{
         fontSize:18,
         borderRadius:50/2,
         marginTop:-60,
         marginBottom:30,
         alignSelf:'center',
         zIndex:1
      },
      container: {
        width:200,
        display:'flex',
        backgroundColor: '#ecf0f1',
      },
      coins:{
        fontWeight:'700',
        textAlign:'center',
        fontSize:17,
        color:'#fff',
      },
      ScoreContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#20324A',
        borderRadius:50,
        paddingHorizontal:25,
        paddingVertical:7,
        marginRight:25
      },
      scoreImg:{
        width:25,
        height:25,
        marginRight:10
      },
      profilePicContainer:{
        flexDirection:'row',
        alignItems:'center',
      },
      profileimg:{
        borderRadius:50,
        width:50,
        height:50,
        marginRight:10
      },
      profileDetails:{
        marginLeft:15
      },
      profileName:{
        fontSize:14,
        fontWeight:"500"
      },
      profileDesignation:{
        fontSize:14,
        fontWeight:"400",
        color:'#51668a',
      },
      UserDataConatiner:{
        flexDirection:'row',
        backgroundColor:'#F2FAFA',
        height:42,
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
      },
      UserDataName:{
        fontSize:14,
        fontWeight:'600',
        
        color:'#000',
      },
      UserDataNameCont:{
        height:40,
        borderBottomWidth:2,
        borderBottomColor:'#45B5C0',
        justifyContent:'center'
      },
      dot:{
          borderStyle: 'solid',
          borderWidth: 2,
          height:2,
          backgroundColor:'#000',
          borderRadius: 12,
          marginTop:6,
          marginLeft:10,
          marginRight:5
      },
      postUserDetils:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between"
      },
      postUserDetilsLhs:{
        flexDirection:'row',
        alignItems:"center",
        // justifyContent:"space-between"
      },
     
  })