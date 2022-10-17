import { StyleSheet , Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 10,
      borderColor:'#51668A',
      backgroundColor:"#9cdcd6",
    },
    circleView:{
        width:80.4,
        height:80.4,
        position:'absolute',
        borderRadius:80,
        top:210,
        left:-40.2,
        transform: [
            { rotate: '90deg' },
        ],
    },
   
    cartGradiant:{
        width:Dimensions.get("window").width/1.05,
        height:125,
        borderRadius:10,
        marginTop:10,
        justifyContent:'center',
        paddingHorizontal:50
    },
    cartText:{
        fontSize:20,
        textAlign:'center'
    },
});