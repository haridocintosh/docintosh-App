import React from 'react'
import { View, Text ,useWindowDimensions,Image,SafeAreaView,ScrollView,Alert, Button,TouchableOpacity} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'; 
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';
const showAlert=()=>{
  alert();
};

const FirstRoute = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styelcss.maindDivBannermcq}>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
    >
    <View>
       <View style={styelcss.communitySubDiv}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
            <Image  source={require('../assets/dr-icon/dr-peer-img1.png')} />
           
            <View style={styelcss.doctorListContent}>
                <Text style={{fontWeight:"600"}}>General Medicine</Text>
                <Text style={styelcss.communittysubtxt}>ENT Specialist </Text>
                <View style={{display:"flex",flexDirection:"row",marginTop:6}}>
                    <Image style={{width:14,height:14}} source={require('../assets/dr-icon/dr-peer-img1.png')}/>
                    <Image style={{width:14,height:14,zIndex:1, marginLeft:-6}} source={require('../assets/dr-icon/dr-peer-img1.png')}/>
                    <Image style={{width:14,height:14,zIndex:1, marginLeft:-6}} source={require('../assets/dr-icon/dr-peer-img1.png')}/>
                    <Text style={{fontSize:12,color:"#51668A",paddingLeft:8}}>160+ Members</Text>
                </View>
            </View>
            </View>
            <View>
              <Text style={{marginBottom:6}}>9:43 am</Text>
              <Text style={styelcss.communityCircule}>9</Text>
            </View>
       </View>
        <Text style={{paddingVertical:12,fontSize:16,fontWeight:"500"}}>Recommandations</Text>
       
       <View style={styelcss.communitySubDivList}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
              <Image source={require('../assets/dr-icon/dr-peer-img1.png')}/>
              <View style={styelcss.doctorListContent}>
                <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>AIMS Hospital </Text>
                <Text style={styelcss.communittysubtxt}>3 Group </Text>
              </View>
            </View>
            <TouchableOpacity>
            <View onStartShouldSetResponder={
            () => navigation.navigate('CommunityDetailsPage')}>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
              <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
              <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}} >Join1 </Text>
              </View>
            </View>
            </TouchableOpacity>

       </View>
       <View style={styelcss.communitySubDivList}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
              <Image source={require('../assets/dr-icon/dr-peer-img1.png')}/>
              <View style={styelcss.doctorListContent}>
                <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                <Text style={styelcss.communittysubtxt}>3 Group </Text>
              </View>
            </View>
            <TouchableOpacity onPress={showAlert}>
            <View >
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
              <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
              <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
   
              </View>
            </View>
            </TouchableOpacity>

       </View>
       <View style={styelcss.communitySubDivList}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
              <Image source={require('../assets/dr-icon/dr-peer-img1.png')}/>
              <View style={styelcss.doctorListContent}>
                <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                <Text style={styelcss.communittysubtxt}>3 Group </Text>
              </View>
            </View>
            <TouchableOpacity onPress={showAlert}>
            <View >
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
              <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
              <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
   
              </View>
            </View>
            </TouchableOpacity>

       </View>
       <View style={styelcss.communitySubDivList}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
              <Image source={require('../assets/dr-icon/dr-peer-img1.png')}/>
              <View style={styelcss.doctorListContent}>
                <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                <Text style={styelcss.communittysubtxt}>3 Group </Text>
              </View>
            </View>
            <TouchableOpacity onPress={showAlert}>
            <View >
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
              <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
              <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Connect </Text>
   
              </View>
            </View>
            </TouchableOpacity>

       </View>
       
      
    </View>
    </ScrollView>
    </SafeAreaView>
      )
};

      const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal:20}} >
            <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>AIMS Hospital</Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>Bangalore Medical Science   </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.addCommunityCrcle}><Text style={styelcss.addCommunityCicon}>+</Text></View>
        </View>
    
      );



      const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal:20}} >
            <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>AIMS Hospital</Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>Bangalore Medical Science   </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.addCommunityCrcle}><Text style={styelcss.addCommunityCicon}>+</Text></View>
        </View>
    
      );





      const fourthRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal:20}} >
            <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>All India Institute of Medical </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>AIMS Hospital</Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.communitySubDivList}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
                <Image
                
                source={require('../assets/dr-icon/dr-peer-img1.png')}
              />
              <View style={styelcss.doctorListContent}>
                  <Text numberOfLines={1} style={{fontWeight:"600",width:175}}>Bangalore Medical Science   </Text>
                  <Text style={styelcss.communittysubtxt}>3 Group </Text>
                </View>
                </View>
                <TouchableOpacity onPress={showAlert}>
                <View >
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} title="Show alert" >
                  <Text style={{fontSize:16,paddingRight:6,color:"#0070D7",}}>+</Text>
                  <Text style={{alignSelf:"center",textAlign:"center",color:"#0070D7",fontSize:12,}}>Join </Text>
       
                  </View>
                </View>
                </TouchableOpacity>
    
           </View>
           <View style={styelcss.addCommunityCrcle}><Text style={styelcss.addCommunityCicon}>+</Text></View>
        </View>
    
      );

const renderScene = SceneMap({
  first  : FirstRoute,
  second : SecondRoute,
  third  : ThirdRoute,
  fourth : fourthRoute,
  
});


const CommonSearchScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first',  title: 'Doctor' },
    { key: 'second', title: 'Community' },
    { key: 'third',  title: 'Speciality' },
    { key: 'fourth', title: 'fourth' },
  ]); 
  
return (
  <>
  
  <TabView style={{paddingTop:0 }}
  navigationState={{ index, routes }}
  renderScene={renderScene}
  onIndexChange={setIndex}
  initialLayout={{ width: layout.width }}
  swipeEnabled={true}
/>
  </>

)
}
export default CommonSearchScreen