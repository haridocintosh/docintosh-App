import { useEffect, useRef, useState } from "react";
import "react-native-gesture-handler";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import {BottomSheetModal, BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {Ionicons, MaterialCommunityIcons,FontAwesome5,} from "@expo/vector-icons";
import { List } from 'react-native-paper';
import CheckBox from "react-native-check-box";


const PublishBottomSheet = ({bottomSheet,spl,userdata,setIsOpen}) => {
    console.log("spl",spl);

    const [checkData, setCheckData] = useState(spl);
    console.log("checkData",checkData);

    const snapPoints = ["60%","60%"];

    const handleChange = (speciality_id) => {
        let temp = checkData.map((check) => {
          if (speciality_id === check.speciality_id) {
            return { ...check, checked: !check.checked };
          }
          return check;
        });
        console.log("temp",{temp});
        setSpl({payload: temp });
        // const specialityId = temp
        //   .filter((val) => val.checked == true)
        //   .map((temp) => temp.speciality_id);
        // setLiftUpData(specialityId);
        // console.log("specialityId",specialityId);
      };

  return (
    <BottomSheetModal
          ref={bottomSheet}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 30 }}
          onDismiss={() => setIsOpen(false)}>

          <BottomSheetScrollView>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Who can see this post? </Text>
            <View style={{margin:10, alignSelf:'flex-start'}}>

              <TouchableOpacity  onPress={() => { publishCheck(8)}} style={{flexDirection:'row'}}>   
                  <Ionicons name="earth" size={20} color="#45B5C0" />
                  <Text style={{marginLeft:15, fontSize:16,fontFamily:'Inter-Regular'}}>Public</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => { publishCheck(1)}} style={{flexDirection:'row',marginTop:15}}>   
                <MaterialCommunityIcons name="medal-outline" size={20} color="#45B5C0" />
                <Text style={{marginLeft:15, fontSize:16, fontFamily:'Inter-Regular',}}>My Speciality ({ userdata && userdata['speciality']})</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => { publishCheck(1)}}>  */}
              <List.Accordion
                style={{
                  marginHorizontal:-10,
                  backgroundColor:'#fff'
                }}
                titleStyle={{marginHorizontal:5, fontSize:16, fontFamily:'Inter-Regular'}}
                title="My Circle"
                left={props => <FontAwesome5 name="users" size={20} color="#45B5C0" />}>
                     <View style={{width:"100%",margin:10, height:1, backgroundColor:'#cecece', }}></View>
                  {spl && spl?.map((element, index)=> {
                    return (
                      <TouchableOpacity style={{flexDirection:'row'}} key={index} >
                      <View style={{}}>
                        <CheckBox
                          style={{ padding: 5,fontFamily:'Inter-Regular' }}
                          onClick={() => handleChange(element.speciality_id)}
                          isChecked={element.checked}
                          checkBoxColor="#2C8892"
                        />
                      </View>
                      <Text style={{margin:8, fontSize:15,fontFamily:'Inter-Regular',color:'#51668A' }}>{element.speciality}</Text>
                      </TouchableOpacity>)
                    })}
                </List.Accordion>
                {/* </TouchableOpacity> */}
         
            </View>        
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
  )
}

export default PublishBottomSheet;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: "flex-end",
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 15,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    title: {
      fontWeight: "900",
      letterSpacing: 0.5,
      fontSize: 16,
      //alignSelf:'center',
    },
    subtitle: {
      color: "#101318",
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
      color: "#56636F",
      fontSize: 13,
      fontWeight: "normal",
      width: "100%",
    },
    content: {
      paddingHorizontal:20,
    },
    textInput:{
      height: 100,
      fontSize: 20,
      fontFamily:'Inter-SemiBold'
    },
    line: {
      backgroundColor: '#cecece',
      widht: '100%',
    },
    PostContainer:{
      padding:20,  
      backgroundColor:"#F2FAFA",
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center'
    },
    imageProfile:{ 
      width:50, 
      borderRadius:50,
      height:50,
      marginRight:10
    },
    userName:{ 
      fontSize:14, 
      fontWeight:'400',
      fontFamily:'Inter-SemiBold'
    },
    publicOption:{
      fontSize:12, 
      fontWeight:'400',
      fontFamily:'Inter-Regular',
      marginHorizontal:5,
      color:'#51668A'
    },
    bottomTabBar:{ 
      flexDirection:'row', 
      paddingHorizontal:20, 
      paddingVertical:10, 
      backgroundColor:"#FFFFFF",
      width:'100%',
      justifyContent:'space-between'
  
    }
  });
  