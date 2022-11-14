import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView,Image, ActivityIndicator } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Contacts from 'expo-contacts';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
const styelcss = require('../assets/css/style');


export default function ContactPermission() {

  const navigation = useNavigation();
  const [contactList, setContact]= useState([]);
  const [isChecked, setChecked] = useState(false);
  const [contactData, setcontactData] = useState('');
  const [contactData1, setcontactData1] = useState(contactList);
  const [loading, setLoading]  = useState(true);
  // const [checkboxdata,setcheckboxdata]=useState();

  // const handleChange = (opt_id) => {
  //   let temp = allMcq?.options.map((mcq) => {
  //     if (opt_id === mcq.opt_id) {
  //       return { ...mcq, checked: !mcq.checked };
  //     }
  //     return mcq;
  //   });
  //   // console.log("temp",temp);
  //   setAllMcq({ ...allMcq, options: temp });
  //   const optId = temp.filter(val => val.checked == true).map(temp => temp.opt_id);
  //   setLiftUpData(optId);
  //   // console.log("optId",optId);
  // };


  const onChecked = (item, index) => {
    // console.log(item);
    console.log(index);
    const newData = [...contactList];
    newData[index].isCheck = !item.isCheck;
    setContact(newData);
  }
  


  // const onChecked = (usernumber)=>{
  //   // let copy=[...contactList];
  //   // copy =[...copy,usernumber]
  //   //  setcontactData(copy)
  //   const newItem = contactList.map((val)=>{
  //       if(val.phoneNumbers.number==usernumber){
  //       //   console.log(val.phoneNumbers.number);
  //       // console.log("bhcjss",usernumber)
  //         return {...val, isSelected:!val.isSelected }
  //       }else{
  //         return val
  //       }
  //     })
     
  //     setcontactData1(newItem);
  //     var array = [...contactData]; // make a separate copy of the array
  //     var index = array.indexOf(usernumber)
  //       if(index !== -1) {
  //         array.splice(index, 1);
  //         setcontactData(array);
  //        // console.log('deletearray',selectitem);
  //       }
  //      console.log(contactData1.length==(contactData.length),contactData)
  //       if(contactData.length){
  //           if(contactData1.length==(contactData.length)){
  //               setChecked(true)}else{
  //               setChecked(false)
  //           }
  //       }
  //     }


    const onAllChecked=()=>{
      const newItem = contactData1.map((val)=>{
          //console.log(item.speciality_id);
          let copy=[...contactData];
          copy =[...copy,val.phoneNumbers.number]
          setcontactData(copy);
          console.log(val.phoneNumbers.number);
          if(val.phoneNumbers.number){
            return {...val, isSelected:true }
          }else{
            return val
          }
        })
        setcontactData1(newItem);
        setChecked(true)
    }

  
  const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    async function getPrermission(){
      //setLoading(true);
      const { status } = await Contacts.requestPermissionsAsync();
      if(status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
         if(data.length > 0) {
         const isSelected=false;
        const contact = data;
          setContact(contact);
          setLoading(false);
         }
      }
    }
    getPrermission();
  }, []);

  
  const handleSubmit = async()=>{
    navigation.navigate('InvitePeers',{
      alluserContact :contactList,
  }) 

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  //'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Bold':require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
  });
  if(!fontsLoaded) {
    return null;
  }  
 };

 if(loading){
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
      <ActivityIndicator size={'large'} color={"#2C8892"}/>
  </View>)
}
  return (
    <View style={{paddingTop:10,paddingHorizontal:20,flex:1,height:"100%"}}>

    <Text>{(loading)?'Loading Data....':<Text></Text>}</Text> 

    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={[styelcss.selectAllList,{flex:12,height:"100%",paddingBottom:20,}]}>
            <Text style={[styelcss.invitePeersHeadTxt,{fontFamily:"PlusJakartaSans-Bold",}]}>Select all</Text>
            <Checkbox  onValueChange={()=>{ onAllChecked() }} value={isChecked} />
        </View>
  
       {contactList && contactList.map((element, index)=>{
          return ( 
            <View style={styelcss.peersmaniListArea} key={index} >
                <View style={styelcss.peersSubiListArea}>
                    <Image style={styelcss.tinyLogo} source={require('../assets/dr-icon/normal.png')}/>
                    <View style={styelcss.peerListcontent}>
                      <Text style={[styelcss.peersubtext,{fontFamily:"Inter-Regular"}]}>{element?.name}</Text>
                      <Text style={[styelcss.peersubtextpara,{fontFamily:"Inter-Regular"}]}>
                          {element?.phoneNumbers && element?.phoneNumbers[0]?.number} </Text>
                    </View>
                </View>
                <Checkbox 
                  key = {element?.phoneNumbers && element?.phoneNumbers?.number}
                  value={element.isCheck || false}
                  onValueChange={()=>{ onChecked(element, index)}} 
                />
            </View>
            )
          
        })}
    
        
              
    </ScrollView>
    <View style={{marginTop:10,zIndex:1,width:"100%",bottom:0,backgroundColor:"#f1f1f1",paddingTop:6}}>
            <CustomButton label={'Continue'} onPress={() => navigation.navigate('LoginScreen')} />
            {/* <Text style={{textAlign:"center",fontSize:14,fontWeight:"700",color:"#2376E5",marginBottom:10,marginTop:-15}}>Select Manually</Text> */}
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
  height:"100%",
    backgroundColor: '#fff',
    paddingHorizontal:20,
    position:"relative",
    width:"100%"

  },
});