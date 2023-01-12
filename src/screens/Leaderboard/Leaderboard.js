import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './LeaderboardStyles';
import { Divider } from 'react-native-elements';



const Leaderboard = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15}}>
        <View style={styles.ScoreContainer}>
            <View style={styles.rankConatiner}>
                <Text style={styles.rankText}>#36</Text>
                <Text style={styles.ownRankText}>Your Rank</Text>
            </View>
            <View style={styles.achiveConatiner}>
                <Image source={require('../../assets/dr-icon/dcoin.png')} style={styles.dcoinImag}/>
                <Text style={styles.achivedText}>822</Text>
            </View>
            <View style={styles.achiveConatiner}>
                <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.dcoinImag}/>
                <Text style={styles.achivedText}>5</Text>
            </View>
        </View>

        <View style={styles.rankersLederboard}>
            <View style={styles.rankersScoreBoad}>
                <View style={styles.rankerProfileContainer}>
                    <Image source={require('../../assets/images/grid1.png')} style={styles.rankerProfile}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>1</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. Mahesh</Text>
                <Text style={styles.rankerScore}>1847</Text>
                <Text style={styles.rankerSpeciality}>Cardiologist</Text>
            </View>
            <View style={styles.rankersScoreBoad2}>
                <View style={styles.rankerProfileContainer2}>
                    <Image source={require('../../assets/dr-icon/blueCrown.png')} style={styles.blueCrown}/>
                    <Image source={require('../../assets/images/grid4.png')} style={styles.rankerProfile2}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>2</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. Kiran</Text>
                <Text style={styles.rankerScore}>2430</Text>
                <Text style={styles.rankerSpeciality}>Neurology</Text>
            </View>
            <View style={styles.rankersScoreBoad}>
                <View style={styles.rankerProfileContainer}>
                    <Image source={require('../../assets/images/grid5.png')} style={styles.rankerProfile}/>
                    <View style={styles.rankedNumber}>
                        <Text style={styles.rankedNumberText}>3</Text>
                    </View>
                </View>
                <Text style={styles.rankerName}>Dr. Suresh</Text>
                <Text style={styles.rankerScore}>1674</Text>
                <Text style={styles.rankerSpeciality}>Radiology</Text>
            </View>
        </View>
        <Divider style={{marginVertical:20}}/>
    </SafeAreaView>
  )
}

export default Leaderboard