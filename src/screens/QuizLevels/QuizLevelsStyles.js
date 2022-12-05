import { StyleSheet, Dimensions } from "react-native";
import { fontsLoaded } from "../../../GlobalStyle";
import { COLORS } from "../../components/constant";

export const styles = StyleSheet.create({
  //------------------- Know Your Heart -----------------------------------------------
  cardbody: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 2,
    // zIndex: 99999,
    position: "absolute",
    width: "100%",
    bottom: 0,
    // padding: 15,
  },
  cardheading: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Bold",
    marginBottom:10
  },
  score: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  badgeparent: {
    flexDirection: "row",
    justifyContent: "center",
    PaddingTop: 20,
  },
  badgeConatiner: {
    padding: 15,
    backgroundColor: "rgba(213, 222, 237, 0.2)",
  },
  badgeimg: {
    width: 35,
    height: 42,
  },
  avtatsize: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  goldCrown: {
    width: 30,
    height: 30,
    position: "absolute",
    right: -9,
    top: -13,
  },
  imaguser: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  collectedUsers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  listitemtst: {
    fontSize: 14,
    fontWeight: "600",
    color: "#071B36",
    fontFamily: "Inter-SemiBold",
  },
  count: {
    paddingRight: 10,
    color: "#51668A",
  },
  itemlisttxt2: {
    color: "#51668A",
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
  },
  marginleft: {
    marginLeft: 15,
    alignItems: "flex-start",
  },
  levelsBadge: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:1,
    width: 90,
  },
  levelText: {
    color: "#51668A",
    fontFamily: "Inter-Regular",
    fontSize:13
  },
  coinsCount: {
    color: "#51668A",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  userScoreCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
  devider: {
    color: "#51668A",
    fontSize: 18,
    marginTop: -3,
  },
  Accesstime: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  outoffBadge: {
    height: 20,
    width: 13,
    marginRight: 5,
  },
  TotalDCoins: {
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  picContainer: {
    position: "relative",
  },
  scoreboard: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#0D2A82",
    flexDirection: "row",
    alignSelf: "center",
    top: -40,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: "#96AEF8",
    alignItems: "center",
  },
  scoreboardText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-Regular",
  },
  WhiteDevider: {
    marginHorizontal: 15,
    backgroundColor: "#96AEF8",
    width: 1,
  },
  ViewAllText: {
    color: "#2376E5",
    alignSelf: "center",
    fontWeight: "600",
    marginTop: 10,
    fontFamily: "PlusJakartaSans-Bold",
  },
  buttonStyle: {
    marginTop: 10,
    width: "100%",
    height: 48,
    alignSelf: "center",
    borderColor: "#fff",
    borderRadius: 15 / 2,
    backgroundColor: "#2C8892",
  },

  /// --------------------------------Mcq List Modal----------------------------
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  // innerContainer:{
  //     backgroundColor:'#D5F2E8',
  //     width:100,
  //     height:550,
  //     borderRadius:10,
  //     width:Dimensions.get("window").width/1.1,
  // },
  iconContainer: {
    padding: 10,
    alignItems: "flex-end",
  },
  McqSelection: {
    padding: 15,
    position: "absolute",
    top: "30%",
    zIndex: 2,
    alignSelf: "center",
  },
  mcqsList: {
    padding: 12,
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor: "#15b3ac",
  },
  mcqsListText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
    fontFamily: "PlusJakartaSans-Bold",
  },
  ModalcartGradiant: {
    // width:250,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
    padding: 15,
    alignItems: "center",
  },
  playIcon: {
    margin: 15,
    color: "#000128",
  },
  mcqStartBtn: {
    backgroundColor: "#2C8892",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 5,
  },
  startText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-Bold",
  },

  //--------------------------------Quiz Game------------------------------------
  question: {
    margin: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#071B36",
    alignSelf: "center",
  },
  Qcard: {
    backgroundColor: "rgba(8, 1, 1, 0.05);",
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  greecrd: {
    backgroundColor: "#42B93D45",
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    zIndex: 3,
  },
  ans: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  progressCircle: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#D5F2E8",
    position: "absolute",
    top: "-140%",
  },
  outOff: {
    fontSize: 16,
    fontWeight: "600",
    position: "absolute",
  },
  mcqSecTiming: {
    borderWidth: 2,
    borderRadius: 50,
    width:60,
    height:60,
    backgroundColor: "#0D2A82",
    alignSelf: 'flex-end',
    borderColor: "#96AEF8",
    alignItems: "center",
    justifyContent:'center',
  },
  mcqSecTimingText: {
    textAlign:'center',
    alignContent:'center',
    color:'#fff',
    fontFamily: "Inter-SemiBold",
    padding:0,
    margin:0,
  },
  //--------------------------------------Quiz Game Quetion--------------------------
  quizGamequestion: {
    margin: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#071B36",
    alignSelf: "flex-start",
    paddingRight: 10,
    width: Dimensions.get("window").width / 1.3,
    fontFamily: "PlusJakartaSans-Bold",
  },
  Qcard: {
    backgroundColor: "rgba(8, 1, 1, 0.05);",
    width: "100%",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  greecrd: {
    backgroundColor: "#42B93D45",
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    zIndex: 3,
  },
  ans: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 16,
  },
  progressCircle: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  //modal CSS
  ModalContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  ModalCart: {
    backgroundColor: COLORS.white,
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  ModalGeet: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ModalScore: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
  //------------------
  QuizLevelcontainer: {
    flex: 1,
    padding: 10,
    borderColor: "#51668A",
    backgroundColor: "#f2f2f2",
  },
  circleView: {
    width: 80.4,
    height: 80.4,
    position: "absolute",
    borderRadius: 80,
    top: 210,
    left: -40.2,
    transform: [{ rotate: "90deg" }],
  },
  cartGradiant: {
    width: Dimensions.get("window").width / 1.05,
    height: 125,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    // paddingHorizontal: 50,
    padding:15,
    alignContent:'flex-start'
  },
  cartText: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
  },
  ListsMcqPlay:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  doccoin: {
    backgroundColor: "#45B5C00D",
    width: 77,
    height: 34,
    borderRadius: 40 / 2,
    borderColor: "#45B5C0",
    borderWidth: 1,
    marginRight: 16,
  },
  d: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
});
