import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    BlockedTitle:{
        fontSize:18,
        fontFamily:'PlusJakartaSans-Bold',
        color:'#071B36'
    },
    BlockedSubtitle:{
        color:'#212121',
        marginTop:15
    },
    communitySubDiv:{
        marginTop:15,
        flexDirection:'row',justifyContent:'space-between',alignItems:'center'
      },
      doctorListContent:{
        marginLeft:5
      },
      communittysubtxt:{
        marginTop:3,
        color:'#51668A',
        fontSize:12
      },
      UnblockText:{
        color: '#2376E5',
        fontSize:12
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.4)'  
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      textBold:{
        fontFamily:'Inter-SemiBold',
      },
      textNormal:{
        fontFamily:"Inter-Regular",
      },
      buttonsContainer:{
        flexDirection:'row',
      },
      buttonsDesign:{
        borderWidth:1,
        paddingHorizontal:25,
        borderRadius:5,
        paddingVertical:7,
        marginTop:20
      },
      leftButtonsDesign:{
        borderColor:'#1A7078'
      },
      RightButtonsDesign:{
        borderColor:'#1A7078',
        backgroundColor:'#1A7078'
      },
      leftText:{
        color:'#1A7078'
      },
      RightText:{
        color:'#fff'
      },
})