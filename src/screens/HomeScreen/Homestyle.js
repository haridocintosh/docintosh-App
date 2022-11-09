import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../components/constant";
export const styles = StyleSheet.create({
  d: {
    width: 17,
    height: 17,
    marginHorizontal: 5,
  },
  count: {
    color: "#fff",
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-Regular",
  },
  whtsnewtxt: {
    alignSelf: "center",
    paddingLeft: 12,
    fontSize: 14,
    fontWeight: "400",
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  questions: {
    fontSize: 14,
    fontWeight: "400",
    color: "#071B36",
    padding: 10,
  },
  marginten: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bordermcq: {
    borderColor: "#D5DEED",
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
  },
  aligncenter: {
    alignSelf: "center",
  },
  careticon: {
    backgroundColor: "#45B5C0",
    borderRadius: 50 / 2,
    width: 30,
    height: 30,
    padding: 2,
    marginTop: -60,
    marginBottom: 30,
    alignSelf: "center",
    shadowColor: "#000",
    zIndex: 1,
  },
  careticontop: {
    backgroundColor: "#45B5C0",
    borderRadius: 50 / 2,
    width: 30,
    height: 30,
    padding: 3,
    marginTop: -100,
    marginBottom: 70,
    alignSelf: "center",
    shadowColor: "#000",
    zIndex: 99999,
  },
  imgblackstrip: {
    backgroundColor: "#000",
    width: "95%",
    padding: 20,
    marginLeft: 9,
    zIndex: 1,
    marginTop: -40,
    opacity: 0.6,
    height: 20,
  },

  songStyle: {
    marginLeft: 10,
  },
  Progressbarcontainer: {
    width: 350,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ProgressLabeContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
  },
  ProgressLabelTxt: {
    color: "#000",
    marginRight: 20,
    fontFamily: "Inter-Regular",
  },
  MusicController: {
    marginTop: -30,
    alignSelf: "center",
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  userInfo: {
    justifyContent: "space-between",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#51668A",
    height: 2,
    borderRadius: 12,
    marginTop: 6,
    marginHorizontal: 5,
  },
  cardOfPosts: {
    marginBottom: 25,
    borderRadius: 10,
    shadowRadius: 10,
    padding: 15,
    marginTop: -10,
  },
  bgtophome: {
    width: "100%",
    resizeMode: "cover",
  },
  imageConatentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    position:'absolute',
    width:'100%'
  },
  collectedCoins: {
    borderRadius: 50,
    backgroundColor: "#20324a",
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop:20
  },

  viewDoccin: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    alignSelf: "center",
    color: "#51668A",
    fontSize: 18,
    fontWeight: "500",
    fontFamily:"Inter-Regular"
  },
  socialImages:{
    width:30,
    height:30
},
socialCount:{
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center'
},
publicReactionsContainer:{ 
    flexDirection: 'row',
    marginTop:5
},
socialCountText:{
    paddingLeft:5,
    color:'#51668A',
    fontFamily:"Inter-Regular",
},
triangle: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  borderRightWidth: 13,
  borderBottomWidth: 13,
  borderLeftWidth: 13,
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#071B36',
  borderLeftColor: 'transparent',
  transform: [{ rotate: '-90deg'}],
  position:'absolute',
  right:-7
},
});
