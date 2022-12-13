import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView,Image, ActivityIndicator,Platform,Linking } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Contacts from 'expo-contacts';
import CheckBox from "react-native-check-box";
const styelcss = require('../assets/css/style');

export default function ContactPermission({navigation}) {
  const [contactList, setContact]= useState([]);
  const [isChecked, setisChecked] = useState(false);
  // const [contactData, setcontactData] = useState('');
  // const [contactData1, setcontactData1] = useState(contactList);
  const [selectedList, setSelectedList] = useState();
  const [loading, setLoading]  = useState(true);
 

  const handleChange = (phoneNumbers) => {
    let temp = contactList.map((data) => {
      if (phoneNumbers === data.id) {
        return { ...data, isSelected: !data.isSelected };
      }
      return data;
    });

    setContact(temp);
    const trueVal = temp
      .filter((val) => val.isSelected == true)
      .map((temp) => temp?.phoneNumbers?.[0].number);
    setSelectedList(trueVal)
  };


  const onAllChecked=()=>{
    setisChecked(!isChecked)
    const selectAll = contactList.map((data) => {
      return {...data , isSelected: !data.isSelected }
    });
    setContact(selectAll);

    const trueVal = selectAll
      .filter((val) => val.isSelected == true)
      .map((data) => data?.phoneNumbers?.[0].number);
    setSelectedList(trueVal)
  }


  const sentInvite = async () => {
    const separator = Platform.OS === 'ios' ? '&' : '?';
    await selectedList.map((number)=>{
      Linking.openURL(`sms:${number}${separator}body=${"I think you got Invitation"}`);
    });
  }

  useEffect(() => {
    navigation.setOptions({ title: 'Invite Peers'});
    async function getPrermission(){
      //setLoading(true);
      const { status } = await Contacts.requestPermissionsAsync();
      if(status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
         if(data.length > 0) {
          const contact = await data.map(element=> {return{...element,isSelected:false}});;       
          setContact(contact);
          setLoading(false);
         }
      }else{
       // navigation.navigate('Login');
       Toast.show('Permission deny');
      }
    }
    getPrermission();
  }, []);
  
  const handleSubmit = async()=>{
    navigation.navigate('InvitePeers',{
      alluserContact :contactList,
  }) 

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
            <CheckBox  
              onClick={()=>{ onAllChecked()}} 
              isChecked={isChecked} 
            />
        </View>
       {contactList && contactList.map((element, index)=>{
          return ( 
            <View style={styelcss.peersmaniListArea} key={index} >
                <View style={styelcss.peersSubiListArea}>
                    <Image style={styelcss.tinyLogo} source={require('../assets/dr-icon/normal.png')}/>
                    <View style={styelcss.peerListcontent}>
                      <Text style={[styelcss.peersubtext,{fontFamily:"Inter-Regular"}]}>{element?.name}</Text>
                      <Text style={[styelcss.peersubtextpara,{fontFamily:"Inter-Regular"}]}>
                          {element?.phoneNumbers && element?.phoneNumbers?.number} </Text>
                    </View>
                </View>
                <CheckBox
                    onClick={() => handleChange(element.id)}
                    isChecked={element.isSelected}
                    checkBoxColor="#2C8892"
                />
            </View>
            )
          
        })}
    
        
              
    </ScrollView>
    <View style={{marginTop:10,zIndex:1,width:"100%",bottom:0,backgroundColor:"#f1f1f1",paddingTop:6}}>
            <CustomButton label={'Continue'} onPress={() => sentInvite()} />
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

  }
})