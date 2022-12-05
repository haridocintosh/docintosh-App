import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./SurvayStyle";

const TypoMcq = ({ setLiftUpData, currentIndex, allMCQs, length }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <View>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Type Here"
              onChangeText={(text) => setLiftUpData(text)}
              maxLength={200}
              value={length}
            />
            <View style={styles.limitationTextContainer}>
              <Text style={[styles.limitationText]}>
                {length ? length.length : 0}/200
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TypoMcq;
