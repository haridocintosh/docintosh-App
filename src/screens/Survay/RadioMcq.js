import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./SurvayStyle";

const RadioMcq = ({ setLiftUpData, currentIndex, allMCQs, nextMcq }) => {
  const [optId, setOptId] = useState(null);

  const validateAnswer = async (ans, basic_id, qid) => {
    setLiftUpData(ans.opt_id);
    //nextMcq(basic_id,qid);
    console.log("ans.opt_id", ans.opt_id);
    setOptId(ans.opt_id);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View>
          {allMCQs[currentIndex]?.options.map((data, i) => {
            return (
              <TouchableOpacity
                style={
                  optId == data?.opt_id
                    ? styles.SurvayOptionsSelect
                    : styles.SurvayOptionsUnselect
                }
                onPress={() =>
                  validateAnswer(
                    data,
                    allMCQs[currentIndex]?.basic_id,
                    allMCQs[currentIndex]?.qid
                  )
                }
                key={i}
              >
                <View style={styles.count}>
                  <Text style={styles.optionSeriel}>
                    {/* styles.optionSeriel */}
                    {i == 0
                      ? "A"
                      : i == 1
                      ? "B"
                      : i == 2
                      ? "C"
                      : i == 3
                      ? "D"
                      : i == 4
                      ? "E"
                      : "F"}
                  </Text>
                </View>
                <Text style={styles.optionS}> {data.options}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RadioMcq;
