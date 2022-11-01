import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import beginnerBadge from "../../assets/dr-icon/beginnerBadge.png";
import intermediateBadge from "../../assets/dr-icon/intermediateBadge.png";
import ExpertBadge from "../../assets/dr-icon/ExpertBadge.png";
import legendBadge from "../../assets/dr-icon/legendBadge.png";
import dcoin from "../../assets/dr-icon/dcoin.png";
import tankyouCelebration from "../../assets/dr-icon/tankyouCelebration.png";
import { Button } from "react-native-elements";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ScratchOffer from "./ScratchOffer";

const ThankYouPage = () => {
  const [showOffer, setShowOffer] = useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#2C8892", position: "relative" }}
    >
      {showOffer && <ScratchOffer setShowOffer={setShowOffer} />}
      <Card style={styles.cardbody}>
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

        <Image source={tankyouCelebration} style={styles.tankyouCelebration} />
          
          <View style={{paddingHorizontal:15,marginTop:-60 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                marginTop: 20,
                textAlign: "center",
              }}
            >
              Thank You
            </Text>
            <Text style={{ fontSize: 14, marginTop: 20, textAlign: "center" }}>
              for your time and response.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                textAlign: "center",
                color: "#51668A",
              }}
            >
              Yay! you took the ‘Bombay Survey - Allergies Survey for Doctor
            </Text>

            <Button
              title="Back to Categories"
              buttonStyle={styles.buttonStyle}
              titleStyle={{color: "#fff",}}
              onPress={() => navigation.navigate("Surveys")}
            />
          </View>

          {/* 
          <View>
            <Text style={{ color: "blue", alignSelf: "center", marginTop: 16 }}>
              View All
            </Text>
          </View> */}
         
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default ThankYouPage;
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
  },
  cardheading: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
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
    width: 15,
    height: 15,
    marginRight: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  badgeimg: {
    width: 35,
    height: 42,
  },
  levelsBadge: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:1,
    width: 90,
  },
  badgeConatiner: {
    padding: 15,
    backgroundColor: "rgba(213, 222, 237, 0.2)",
  },
  tankyouCelebration:{
   width : Dimensions.get("window").width/1,
   height:140
  },
  buttonStyle:{
    marginTop: 30,
    bottom: 10,
    width: "100%",
    height: 48,
    alignSelf: "center",
    borderColor: "#fff",
    borderRadius: 15 / 2,
    backgroundColor: "#2C8892",
  }
});
