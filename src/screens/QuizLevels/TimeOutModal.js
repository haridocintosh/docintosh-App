import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const TimeOutModal = ({ toggle }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),

    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),

    "PlusJakartaSans-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),

    "PlusJakartaSans-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="closecircleo"
            size={25}
            onPress={() => toggle(true)}
          />
        </View>
        <View style={styles.McqSelection}>
          <Text style={styles.mcqsListText}>Your Time Out</Text>
          <TouchableOpacity
            style={styles.mcqsList}
            onPress={() => navigation.navigate("QuizLevels")}
          >
            <Text
              style={[styles.goBack, { fontFamily: "PlusJakartaSans-Bold" }]}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontFamily: "PlusJakartaSans-Bold" }}>McqListModal</Text>
    </View>
  );
};

export default TimeOutModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "#fff",
    width: 100,
    height: 200,
    borderRadius: 10,
    width: Dimensions.get("window").width / 1.1,
  },
  iconContainer: {
    padding: 10,
    alignItems: "flex-end",
  },
  McqSelection: {
    padding: 15,
  },
  mcqsList: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#046B74",
    position: "relative",
    top: 50,
  },
  mcqsListText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  goBack: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
