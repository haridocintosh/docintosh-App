import { View, Text, SafeAreaView,Image,TouchableOpacity,Modal } from 'react-native'
import React, { useEffect ,useState} from 'react';
import { styles } from './BlockListStyle';
import { getLocalData } from '../../../apis/GetLocalData';
import { getBlockedUsersApi } from '../../../../redux/reducers/SettingsSlice';
import { useDispatch } from 'react-redux';


const BlockList = ({navigation}) => {

    const [item, setItem] = useState();
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();


    const getBlockedData = () => {
        getLocalData("USER_INFO").then( async (res) => {
            const blockedUsers = await dispatch(getBlockedUsersApi({user_id:res?.data?.id}));
            setItem(blockedUsers.payload)
            console.log(blockedUsers.payload);
        })
    }

    useEffect(() => {
        navigation.setOptions({title: "Block List"});
        getBlockedData();
    },[])


    const handleUnblock = (id) => {
        console.log("id",id);
        setVisible(true)

    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15,paddingVertical:10 }}>
        <Text style={styles.BlockedTitle}>Blocked People</Text>
        <Text style={styles.BlockedSubtitle}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
        {item?.data?.map((data,i) => {
            return(
            <View style={styles.communitySubDiv} key={i}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                    <Image source={{uri:data?.profileimage}} style={{width:50,height:50,borderRadius:50}}/>
                    <View style={styles.doctorListContent}>
                        <Text style={{fontWeight:"600",fontSize:15}}>
                            {data?.utitle} {data?.first_name} {data?.last_name}
                        </Text>
                        <Text style={styles.communittysubtxt}>{data?.speciality}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleUnblock(data?.id)}>
                    <Text style={styles.UnblockText}>Unblock</Text>
                </TouchableOpacity>
            </View>
            )
        })}

        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={styles.textBold}>Hold on!,</Text>
                <Text style={styles.textNormal}>Are you sure you want to exit app?</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                    onPress={() =>{setVisible(false)}}>
                    <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                    </TouchableOpacity>
                    <Text>{"        "}</Text>
                    <TouchableOpacity 
                    style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                    onPress={() => handleExit()}>
                    <Text style={[styles.textBold,styles.RightText]}>Okay</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
        
     
    </SafeAreaView>
  )
}

export default BlockList