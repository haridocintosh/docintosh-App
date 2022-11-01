import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import beginnerBadge from "../../assets/dr-icon/beginnerBadge.png";
import intermediateBadge from "../../assets/dr-icon/intermediateBadge.png";
import ExpertBadge from "../../assets/dr-icon/ExpertBadge.png";
import legendBadge from "../../assets/dr-icon/legendBadge.png";
import Accesstime from "../../assets/dr-icon/Accesstime.png";
import outoffBadge from "../../assets/dr-icon/outoffBadge.png";
import dcoin from "../../assets/dr-icon/dcoin.png";
import goldCrown from "../../assets/dr-icon/gold-crown.png";
import outoffWhiteBadge from "../../assets/dr-icon/outoffWhiteBadge.png";
import whiteAccesstime from "../../assets/dr-icon/whiteAccesstime.png";
import { Button } from "react-native-elements";
import UserAvatar from "../../assets/images/p2.png";
import { Card } from "react-native-paper";
import axios from "axios";
import { mainApi } from "../../apis/constant";

const KnowYourHeart = ({ route }) => {
  const { score } = route?.params;
  const { TotalMcq } = route?.params;

  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sliceData, setSliceData] = useState(10);
  const navigation = useNavigation();

  const getLeaderboardData = () => {
    axios
      .get(`${mainApi.baseUrl}/ApiController/global_leaderboard`)
      .then((res) => {
        // console.log("res",res.data);
        setUserData(res.data);
        setLoader(false);
      });
  };
  // console.log("userData",userData);
  useEffect(() => {
    getLeaderboardData();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
    >
      <Card style={styles.cardbody}>
        <View style={styles.scoreboard}>
          <Image source={outoffWhiteBadge} style={styles.outoffBadge} />
          <Text style={styles.scoreboardText}>
            {score}/{TotalMcq}
          </Text>
          <Text style={styles.WhiteDevider} />
          <Image source={whiteAccesstime} style={styles.Accesstime} />
          <Text style={styles.scoreboardText}>2:30 min</Text>
        </View>
        <View>
          <View style={styles.badgeConatiner}>
            <Text style={styles.cardheading}>
              386 Coins Left to reach Level 5!!!
            </Text>
            <View style={styles.badgeparent}>
              <View style={styles.levelsBadge}>
                <Image source={beginnerBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Beginner</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>200</Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={intermediateBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Intermediate</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>400</Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={ExpertBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Expert</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>600</Text>
                  </View>
                </View>
              </View>

              <View style={styles.levelsBadge}>
                <Image source={legendBadge} style={styles.badgeimg} />
                <View>
                  <Text style={styles.levelText}>Legend</Text>
                  <View style={styles.row}>
                    <Image source={dcoin} style={styles.imaguser} />
                    <Text style={styles.coinsCount}>800</Text>
                  </View>
                </View>
              </View>
              
            </View>
          </View>

          <View style={{ backgroundColor: "#ffff", padding: 15 }}>
            <View style={{ height: 300 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnable={true}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Winners for this Challenge
                </Text>

                {loader && (
                  <ActivityIndicator
                    color={"#2C8892"}
                    style={{ marginTop: 130 }}
                  />
                )}

                {userData &&
                  userData?.slice(0, sliceData).map((data, index) => {
                    return (
                      <View style={styles.collectedUsers} key={index}>
                        <View style={styles.row}>
                          <Text style={styles.count}>{index + 1}</Text>
                          <View style={styles.picContainer}>
                            <Image
                              style={styles.avtatsize}
                              source={{ uri: data.profileimage }}
                            />
                            <Image
                              style={styles.goldCrown}
                              source={goldCrown}
                            />
                          </View>
                          <View style={styles.marginleft}>
                            <Text style={styles.listitemtst}>
                              Dr. {data.username}
                            </Text>
                            <View style={styles.userScoreCount}>
                              <Image
                                source={outoffBadge}
                                style={styles.outoffBadge}
                              />
                              <Text style={styles.itemlisttxt2}>
                                {data.mcq_contest}
                              </Text>
                              <Text style={styles.devider}> | </Text>
                              <Image
                                source={Accesstime}
                                style={styles.Accesstime}
                              />
                              <Text style={styles.itemlisttxt2}>
                                {parseInt(data.total_time.split(".")[0]) % 60}
                                {data.total_time.split(".")[1] &&
                                  `:` +
                                    (parseInt(
                                      data.total_time.split(".")[1]
                                    ).toFixed(2) %
                                      60)}{" "}
                                min
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <Image source={dcoin} style={styles.imaguser} />
                          <Text style={styles.TotalDCoins}> 20976</Text>
                        </View>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
            <View>

              <TouchableOpacity onPress={() => setSliceData()}>
                <Text style={styles.ViewAllText}>View All</Text>
              </TouchableOpacity>

              <Button
                title="Back to Categories"
                buttonStyle={styles.buttonStyle}
                titleStyle={{ color: "#fff" }}
                onPress={() => navigation.navigate("QuizLevels")}
              />
            </View>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default KnowYourHeart;

const styles = StyleSheet.create({
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
    // marginTop: 10,
  },
  score: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  badgeparent: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  count: {
    paddingRight: 10,
    color: "#51668A",
  },
  itemlisttxt2: {
    color: "#51668A",
    fontWeight: "600",
    fontSize: 12,
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
  },
  coinsCount: {
    color: "#51668A",
    fontSize: 12,
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
  },
  WhiteDevider: {
    marginHorizontal: 15,
    backgroundColor: "#96AEF8",
    width: 1,
  },
  ViewAllText:{ color: "#2376E5", alignSelf: "center", fontWeight:'600',marginTop:10 },
  buttonStyle:{
    marginTop: 10,
    width: "100%",
    height: 48,
    alignSelf: "center",
    borderColor: "#fff",
    borderRadius: 15 / 2,
    backgroundColor: "#2C8892",
  }
});
