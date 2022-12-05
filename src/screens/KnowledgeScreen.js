import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

export default function KnowledgeScreen() {

  const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Event' },
      { key: 'second', title: 'Archived' },
      // { key: 'third', title: 'third' },
    ]);
  const [gamesTab, setGamesTab] = useState(1);
  const navigation = useNavigation();


  const onSelectSwitch = value => {
    setGamesTab(value);
  };


  const FirstRoute = () => (
    <View style={{ flex: 1, color: '#000' }}>
        <Text style={{color:'#000'}}>Alka</Text>
    </View>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, color: '#000' }} />
  );
  
  // const renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  //   // third: FirstRoute,
  // });
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView  showsVerticalScrollIndicator={false}
      >
      <View style={{width:'100%', height:40}}>

      {/* <TabView
 
     indicatorStyle={{ backgroundColor: '#eeaf3b' }}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
 
    renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#F2FAFA',}}/>}
   
  /> */}
      </View>
<View style={{padding:10}}>
      <Card style={{borderRadius:20/2, height:295 ,  marginTop:20, }}  onPress={() => navigation.navigate('Knowledge2Screen')}>
      
      <View>
      <Image source={require('../assets/images/Rectangle.png')} style={{width:'100%'}}/>

      <View style={{backgroundColor:'#45B5C0', width:81, height:21, borderRadius:12/2,zIndex:1, marginTop:-30, marginLeft:10}}>
      <Text style={{textAlign:'center', color:'#fff', fontSize:12,fontWeight:'600',lineHeight:20}}>Sponsored</Text></View>
      
      <View style={{backgroundColor:'#fff', width:130, height:21, borderRadius:12/2,zIndex:1, marginTop:-20, marginLeft:100}}>
      <Text style={{textAlign:'center', color:'#000', fontSize:12,fontWeight:'600',lineHeight:20}}>10 Aug | 12PM - 2PM</Text></View>
      
</View>

<View style={{marginTop:16 , marginLeft:12, }}>
  <Text style={{fontSize:16, fontWeight:'600', color:'#071B36'}}>Telemedicine</Text>
</View>
<View style={{flexDirection:'row',alignSelf:'flex-end',marginTop:-15}}>
  <Image source={require('../assets/dr-icon/dric.png')} style={{marginRight:5}}/>
  <Text style={{paddingRight:5}}>250</Text>
  <Text style={{paddingRight:5}}>Or</Text>
  <Text style={{paddingRight:10}}>₹100  </Text>
 
</View>
<View style={{flexDirection:'row',marginLeft:10 , marginTop:10}}>
                <Image source={require('../assets/dr-icon/Oval.png')}/>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} />
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} /> 
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>160+ Members</Text>
               </View>
               <View style={{marginLeft:10, marginTop:10,lineHeight:40, padding:20}}>
                <Text style={{fontSize:12, fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
               </View>
      </Card>

      <Card style={{borderRadius:20/2, height:295 , marginTop:20, }}>
      
      <View>
      <Image source={require('../assets/images/Rectangle1.png')} style={{width:'100%'}}></Image>

      
      
      <View style={{backgroundColor:'#fff', width:130, height:21, borderRadius:12/2,zIndex:1, marginTop:-30, marginLeft:10}}>
      <Text style={{textAlign:'center', color:'#000', fontSize:12,fontWeight:'600',lineHeight:20}}>10 Aug | 12PM - 2PM</Text></View>
      
</View>

<View style={{marginTop:16 , marginLeft:12, }}>
  <Text style={{fontSize:16, fontWeight:'600', color:'#071B36'}}>Telemedicine</Text>
</View>
<View style={{flexDirection:'row',alignSelf:'flex-end',marginTop:-15}}>
  <Image source={require('../assets/dr-icon/dric.png')} style={{marginRight:5}}></Image>
  <Text style={{paddingRight:5}}>250</Text>
  {/* <Text style={{paddingRight:5}}>Or</Text>
  <Text style={{paddingRight:10}}>₹100  </Text> */}
 
</View>
 <View style={{flexDirection:'row',marginLeft:10 , marginTop:10}}>
                <Image source={require('../assets/dr-icon/Oval.png')} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>160+ Members</Text>
               </View>
               <View style={{marginLeft:10, marginTop:10,lineHeight:40, padding:20}}>
                <Text style={{fontSize:12, fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
               </View>
      </Card>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}
