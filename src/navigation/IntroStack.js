import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import {
  useNavigation
} from '@react-navigation/native';
const {
  width,
  height
} = Dimensions.get('window')
import CustomButton from '../components/CustomButton';
const styles = {
  wrapper: {
    // backgroundColor: '#f00'
    paddingTop: 20,
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },
  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width: 360,
    height: 333,
    position: "relative"
  },
  imagelogo: {
    width: 57,
    height: 50,
    position: "absolute",
    top: 50,
    left: 50,
    transform: [{
      translateX: 120
    }, {
      translateY: 95
    }],
  },
  sliderText: {
    fontSize: 32,
    paddingTop: 40,
    color: '#071B36',
    fontWeight: "700",
    lineHeight: 40,
    paddingLeft: 32,
    paddingRight:40
    // width: 300,
  },
  sliderPara: {
    fontSize: 14,
    paddingTop: 12,
    color: '#071B36',
    fontWeight: "500",
    lineHeight: 20,
    paddingLeft: 32,
    width: 281,
  },
  ragisterbutton: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    marginBottom: -10,
    display:"flex",
    alignItems:'center'
  },
  ragistertext0: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginBottom: 20,
  },
  ragistertext2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8C97AB',
  },

}

import React from 'react'

export const Slider_comp = () => {
  const navigation = useNavigation();
  return ( 
  <View style = {
      styles.container
    } >
    <StatusBar barStyle = "light-content" />
    <Swiper style = { styles.wrapper}
    dot = {
      <View
      style = {
        {
          width: 6,
          height: 6,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7,
          backgroundColor: '#F8B84E',
        }
      }
      />
    }
    activeDot = {
    <View
      style = {
        {
          backgroundColor: '#F8B84E',
          width: 32,
          height: 6,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7
        }
      }
      />
    }
    paginationStyle = {
      {
        bottom: -15,
        left: -220
      }
    }
    loop = {
      false
    } >
    <View style = {styles.slide}>
    <Image style = {styles.image} source = {require('../assets/intro/Image1.png')} resizeMode = "cover" />
    <Image style = {styles.imagelogo} source = {require('../assets/intro/logo1.png')}resizeMode = "cover" />
    <Text style = {styles.sliderText}>Create & Join Discussion Groups </Text> 
    <Text style = {styles.sliderPara}>Impedit quo minus id quod maxime placeat facere possimus. </Text>

    </View>
      <View style ={styles.slide}>
      <Image style ={styles.image} source = {require('../assets/intro/Image2.png')} resizeMode = "cover" />
      <Text style = {styles.sliderText }>Securely Share Posts on Social </Text> 
      <Text style = { styles.sliderPara}>Impedit quo minus id quod maxime placeat facere possimus. </Text> 
    </View>

    <View style = {styles.slide} >
      <Image style = {styles.image} source = {require('../assets/intro/Image3.png') }/> 
      <Text style = {styles.sliderText}>Earn by Answering Polls, Surveys </Text>    
      <Text style = {styles.sliderPara}>Impedit quo minus id quod maxime placeat facere possimus. </Text>
    </View> 
  </Swiper> 
    <View style = {styles.ragisterbutton} >
      <CustomButton label = {'Register'} onPress = { () => navigation.navigate('Register')}/>
      {/* <CustomButton label = {'Login'} onPress = { () => navigation.navigate('MobileScreen')}/> */}
      </View> 
      <View style = {styles.ragistertext0}>
      <Text style = {styles.ragistertext2}>Already a member ? </Text> 
      <TouchableOpacity onPress = {() => navigation.navigate('Login')} >
      <Text style = {{ color: '#2376E5', fontWeight: '600',fontSize: 16,}}
        onPress = {() => navigation.navigate('Login')} > Login </Text> 
      </TouchableOpacity> 
      </View>
      </View>
  )
}

export default function IntroStack() {
  return ( 
    <View style = {
      {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
    } >
    <Slider_comp/>
    
    </View>
  );
}