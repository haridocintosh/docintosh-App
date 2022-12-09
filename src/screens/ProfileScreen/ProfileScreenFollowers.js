import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';
import { styles } from './profilestyle';

const ProfileScreenFollowers = ({navigation}) => {
   useEffect(() => {
      navigation.setOptions({ title: 'Followers' });
    },[])
  return (
    <SafeAreaView style={styles.Follwerscontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>829 Followers</Text>
            </View>

            <View style={styles.followerContainer}>
                <View style={styles.followerLhs}>
                   <Image source={require('../../assets/images/p2.png')} style={styles.profileimgfollower}/>
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
                   <Image source={require('../../assets/images/p2.png')} style={styles.profileimgfollower}/>
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
                   <Image source={require('../../assets/images/p2.png')} style={styles.profileimgfollower}/>
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
