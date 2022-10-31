import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Path1 from "../../assets/dr-icon/Path1.png";
import Path2 from "../../assets/dr-icon/Path2.png";
import Path3 from "../../assets/dr-icon/Path3.png";
import Path4 from "../../assets/dr-icon/Path4.png";
import d from "../../assets/dr-icon/d.png";
import winner from "../../assets/dr-icon/winner.png";
import king from "../../assets/dr-icon/king.png";
import badge from "../../assets/dr-icon/badge.png";
import badge1 from "../../assets/dr-icon/badge1.png";
import { Button } from "react-native-elements";
import UserAvatar from "../../assets/images/p2.png";
import { Card } from "react-native-paper";

const KnowYourHeart = ({route}) => {
  const { score } = route?.params;
  const { TotalMcq } = route?.params;

    const [gamesTab, setGamesTab] = useState(1);
    const navigation = useNavigation();
    const onSelectSwitch = (value) => {
         setGamesTab(value);
    };
  return (
    <SafeAreaView
          style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
        >
          <Card style={styles.cardbody}>
            <View>
              
              <View>
              <Text style={styles.score} >{score}/{TotalMcq}</Text>
                <Text style={styles.cardheading}>
                  386 Coins Left to reach Level 5!!!
                </Text>
              </View>
              <View style={styles.badgeparent}>
                <View style={{}}>
                  <ImageBackground source={Path1} style={styles.badgeimg}>
                    <Image source={badge} style={styles.badgeimg} />
                  </ImageBackground>
                  <View>
                    <Text>Beginner</Text>
                    <View style={styles.row}>
                      <Image source={d} style={styles.imaguser} />
                      <Text style={{ fontSize: 12 }}>200</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <ImageBackground source={Path2} style={styles.badgeimg}>
                    <Image source={winner} style={styles.badgeimg} />
                  </ImageBackground>
                  <View>
                    <Text style={{ alignSelf: "center" }}>Intermediate</Text>
                    <View style={styles.row}>
                      <Image source={d} style={styles.imaguser} />
                      <Text style={{ fontSize: 12 }}>200</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <ImageBackground source={Path3} style={styles.badgeimg}>
                    <Image source={badge1} style={styles.badgeimg} />
                  </ImageBackground>
                  <View>
                    <Text>Expert</Text>
                    <View style={styles.row}>
                      <Image source={d} style={styles.imaguser} />
                      <Text style={{ fontSize: 12 }}>200</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <ImageBackground source={Path4} style={styles.badgeimg}>
                    <Image source={king} style={styles.badgeimg} />
                  </ImageBackground>
                  <View>
                    <Text style={{ marginBottom: 1 }}>Legend</Text>
                    <View style={styles.row}>
                      <Image source={d} style={styles.imaguser} />
                      <Text style={{ fontSize: 12 }}>200</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{ paddingLeft: 20, backgroundColor: "#ffff", marginTop: 10 }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
                  Winners for this Challenge
                </Text>
                <View style={styles.row}>
                  <Text style={styles.count}>1</Text>
                  <View>
                    <Image style={styles.avtatsize} source={UserAvatar} />
                  </View>
                  <View style={styles.marginleft}>
                    <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                    <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
                  </View>
                </View>
                <View style={styles.margintop}></View>
    
                <View style={styles.row}>
                  <Text style={styles.count}>2</Text>
    
                  <View>
                    <Image style={styles.avtatsize} source={UserAvatar} />
                  </View>
                  <View style={styles.marginleft}>
                    <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                    <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
                  </View>
                </View>
                <View style={styles.margintop}></View>
    
                <View style={styles.row}>
                  <Text style={styles.count}>3</Text>
    
                  <View>
                    <Image style={styles.avtatsize} source={UserAvatar} />
                  </View>
                  <View style={styles.marginleft}>
                    <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                    <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
                  </View>
                </View>
                <View style={styles.margintop}></View>
    
                <View style={styles.row}>
                  <Text style={styles.count}>4</Text>
    
                  <View>
                    <Image style={styles.avtatsize} source={UserAvatar} />
                  </View>
                  <View style={styles.marginleft}>
                    <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                    <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
                  </View>
                </View>
                <View style={styles.margintop}></View>
                <View style={styles.row}>
                  <Text style={styles.count}>5</Text>
    
                  <View>
                    <Image style={styles.avtatsize} source={UserAvatar} />
                  </View>
                  <View style={styles.marginleft}>
                    <Text style={styles.listitemtst}>Dr. Kiran Raj</Text>
                    <Text style={styles.itemlisttxt2}>9140 DocCoin Collected</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{ color: "blue", alignSelf: "center", marginTop: 16 }}
                  >
                    View All
                  </Text>
                </View>
              </View>
              <Button
                title="Back to Categories"
                buttonStyle={{
                  marginTop: 30,
                  bottom: 10,
                  width: "100%",
                  height: 48,
                  alignSelf: "center",
                  borderColor: "#fff",
                  borderRadius: 15 / 2,
                  backgroundColor: "#2C8892",
                }}
                titleStyle={{
                  color: "#fff",
                }}
                onPress={() => navigation.navigate("QuizLevels")}
              />
            </View>
          </Card>
          {/* <View>
          <Image source={knowheart} style={{width:'100%', height:230, marginTop:20}}></Image>
        </View>
     */}
        </SafeAreaView>
  )
}

export default KnowYourHeart;


const styles = StyleSheet.create({
  cardbody: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 2,
    zIndex: 99999,
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 15,
  },
  cardheading: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
  score: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  badgeparent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  badgeimg: {
    width: 30,
    height: 30,
  },
  avtatsize: {
    width: 40,
    height: 40,
  },
  imaguser: {
    width: 14,
    fontSize: 14,
    height: 14,
  },

  row: {
    flexDirection: "row",
  },
  line: {
    borderWidth: 1,
    borderColor: "#D5DEED",
    marginTop: 17,
  },
  listitemtst: {
    fontSize: 14,
    fontWeight: "600",
    color: "#071B36",
  },
  count: {
    paddingRight: 10,
    marginTop: 10,
  },
  itemlisttxt2: {
    color: "#51668A",
    fontWeight: "400",
    fontSize: 12,
  },
  margintop: {
    marginTop: 20,
  },
  marginleft: {
    marginLeft: 20,
  },
});
