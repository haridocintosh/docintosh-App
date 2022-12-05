import { View, Text ,SafeAreaView,TouchableOpacity,ImageBackground,Image,ScrollView} from 'react-native'
import React from 'react';
import { styles } from './whatsNewStyles';


const WhatsNew = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA',padding:10}}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitle}>Webinar</Text>
                <View style={styles.cartOffers}>
                <Image source={require("../../../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>250 Or ₹40 </Text>
                <Image source={require("../../../assets/dr-icon/calender.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>Aug 15 </Text>
                </View>
                
                </View>
                <TouchableOpacity>
                <Image source={require('../../../assets/images/Play.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>Telemedicine and its Trends for 2023</Text>

            <Text style={styles.trendTitleContent}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
            <ImageBackground source={require('../../../assets/images/CartWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

        <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitleQuiz}>Quiz</Text>
                <View style={styles.cartOffers}>
                    <Text style={styles.cartOffersText}>Earn</Text>
                    <Image source={require("../../../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                    <Text style={styles.cartOffersText}>100</Text>
                </View>
                </View>
                <TouchableOpacity>
                <Image source={require('../../../assets/images/QuizTimer.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>Bleeding Disorders</Text>
            <Text style={styles.trendTitleContent}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
            <ImageBackground source={require('../../../assets/images/QuizWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.buttonText}>Participate</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

        {/* <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitle}>Webinar</Text>
                <View style={styles.cartOffers}>
                <Image source={require("../../../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>250 Or ₹40 </Text>
                <Image source={require("../../../assets/dr-icon/calender.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>Aug 15 </Text>
                </View>
                
                </View>
                <TouchableOpacity>
                <Image source={require('../../../assets/images/Play.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>Telemedicine and its Trends for 2023</Text>

            <Text style={styles.trendTitleContent}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
            <ImageBackground source={require('../../../assets/images/CartWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitle}>Webinar</Text>
                <View style={styles.cartOffers}>
                <Image source={require("../../../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>250 Or ₹40 </Text>
                <Image source={require("../../../assets/dr-icon/calender.png")} style={styles.docCoin}/>
                <Text style={styles.cartOffersText}>Aug 15 </Text>
                </View>
                
                </View>
                <TouchableOpacity>
                <Image source={require('../../../assets/images/Play.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>Telemedicine and its Trends for 2023</Text>

            <Text style={styles.trendTitleContent}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
            <ImageBackground source={require('../../../assets/images/CartWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View> */}
      </ScrollView> 
    </SafeAreaView>
  )
}

export default WhatsNew