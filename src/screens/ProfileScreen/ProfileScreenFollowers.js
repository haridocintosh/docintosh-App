import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react';
import profileimg from '../../assets/images/p2.png';
import { Entypo } from '@expo/vector-icons';

const ProfileScreenFollowers = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>829 Followers</Text>
            </View>

            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={profileimg} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Kiran</Text>
                        <Text style={styles.followerSpecialist}>Urology</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>

            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={profileimg} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Kiran</Text>
                        <Text style={styles.followerSpecialist}>Urology</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>
            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={profileimg} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Kiran</Text>
                        <Text style={styles.followerSpecialist}>Urology</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>
            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={profileimg} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Kiran</Text>
                        <Text style={styles.followerSpecialist}>Urology</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreenFollowers;
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F2FAFA",
        flex:1,
        paddingHorizontal:15
    },
    followerHeader:{
        fontWeight:'600',
        fontSize:16,
        marginVertical:5
    },
    followerContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    profileimg:{
        height:60,
        width:60,
        marginRight:15
    },
    followerLhs:{
        flexDirection:'row',
        alignItems:'center'
    },
    followerName:{

    },
    followerNameText:{
        fontSize:16,
        fontWeight:'500'
    },
    followerSpecialist:{
        fontSize:12,
        fontWeight:'400',
        color:'#51668A',
        marginTop:5
    }
});