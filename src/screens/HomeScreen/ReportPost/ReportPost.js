import { View, Text,SafeAreaView,TouchableOpacity ,Modal} from 'react-native'
import React,{ useState,useEffect } from 'react'
import { styles } from './ReportPostStyles';
import {EvilIcons} from '@expo/vector-icons';


const ReportPost = ({navigation}) => {
    const [reportSelect,setReportSelect] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
      navigation.setOptions({ title: 'Report Post'});
    },[])

    const handleSelect = (val) => {
        // console.log("val", val);
        switch (val) {
            case '1':
                setReportSelect("Harassment or Bullying");
                break;
            case '2':
                setReportSelect("Hate Speech");
                break;
            case '3':
                setReportSelect("Spams");
                break;
            case '4':
                setReportSelect("Voilation");
                break;
            case '5':
                setReportSelect("Nudity or Sexual Activity");
                break;
            case '6':
                setReportSelect("False Information");
                break;
            case '7':
                setReportSelect("Unauthorized Sales");
                break;
            default:
                break;
        }
        setModalVisible(true)
        
        
        
    }
    // console.log("reportSelect",reportSelect);
    
    const handleSend =() => {
        console.log(reportSelect);
        setModalVisible(false);
        navigation.navigate("ReportTrack", {reportSelect});

    }
    
  return (
    <SafeAreaView>
        <Text style={styles.reportTitle}>What’s going wrong?</Text>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("1")} >
          <Text style={styles.reportIssueText}>Harassment or Bullying</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("2")}>
          <Text style={styles.reportIssueText}>Hate Speech</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("3")}>
          <Text style={styles.reportIssueText}>Spams</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("4")}>
          <Text style={styles.reportIssueText}>Voilation</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("5")}>
          <Text style={styles.reportIssueText}>Nudity or Sexual Activity</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("6")}>
          <Text style={styles.reportIssueText}>False Information</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reportIssueContainer} onPress={() =>handleSelect("7")}>
          <Text style={styles.reportIssueText}>Unauthorized Sales</Text>
          <EvilIcons name='chevron-right' size={40} color="#071B36"/>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textBold}>Are You Sure?</Text>
              <Text style={styles.textNormal}>Dou you what report on this post?</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                  style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                  onPress={() =>{setModalVisible(false)}}>
                <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                </TouchableOpacity>
                <Text>{"        "}</Text>
                <TouchableOpacity 
                  style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                  onPress={() => handleSend()}>
                <Text style={[styles.textBold,styles.RightText]}>send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
        
    </SafeAreaView>
  )
}

export default ReportPost