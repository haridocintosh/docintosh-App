import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import { styles } from "./SurvayStyle";

const ThankYouPage = ({ route }) => {
  const [showOffer, setShowOffer] = useState(true);
  const navigation = useNavigation();
  const { surveyid } = route.params;
  // console.log("surveyid",surveyid);

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

          <Image
            source={tankyouCelebration}
            style={styles.tankyouCelebration}
          />

          <View style={{ paddingHorizontal: 15, marginTop: -60 }}>
            <Text style={styles.thankutxt}>Thank You</Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                textAlign: "center",
                fontFamily: "Inter-Regular",
              }}
            >
              for your time and response.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                textAlign: "center",
                color: "#51668A",
                fontFamily: "Inter-Regular",
              }}
            >
              Yay! you took the ‘Bombay Survey - Allergies Survey for Doctor
            </Text>

            <Button
              title="Back to Categories"
              buttonStyle={styles.buttonStyle}
              titleStyle={{ color: "#fff", fontFamily: "PlusJakartaSans-Bold" }}
              onPress={() =>
                navigation.navigate("Surveys", { surveyid: surveyid })
              }
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
