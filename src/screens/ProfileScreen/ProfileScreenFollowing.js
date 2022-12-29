import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';
import { styles } from './profilestyle';


const ProfileScreenFollowing = ({navigation}) => {
   useEffect(() => {
      navigation.setOptions({ title: 'Following' });
    },[])
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>520 Following</Text>
            </View>

            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={require('../../assets/images/p3.png')} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Sudeep Bhatra</Text>
                        <Text style={styles.followerSpecialist}>Pediatric Surgeon</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>
            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={require('../../assets/images/p3.png')} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Sudeep Bhatra</Text>
                        <Text style={styles.followerSpecialist}>Pediatric Surgeon</Text>
                   </View>
                </View>
                <View style={styles.followerLhs}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </View>
            </View>
            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={require('../../assets/images/p3.png')} style={styles.profileimg}/>
                   <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>Dr. Sudeep Bhatra</Text>
                        <Text style={styles.followerSpecialist}>Pediatric Surgeon</Text>
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

export default ProfileScreenFollowing;