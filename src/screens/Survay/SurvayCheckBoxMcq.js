import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import CheckBox from "react-native-check-box";
import { styles } from "./SurvayStyle";

const SurvayCheckBoxMcq = ({ setLiftUpData, currentIndex, allMCQs }) => {
  const [allMcq, setAllMcq] = useState(allMCQs[currentIndex]);

  const handleChange = (opt_id) => {
    let temp = allMcq?.options.map((mcq) => {
      if (opt_id === mcq.opt_id) {
        return { ...mcq, checked: !mcq.checked };
      }
      return mcq;
    });
    // console.log("temp",{ ...allMcq, options: temp });
    setAllMcq({ ...allMcq, options: temp });
    
    const optId = temp
      .filter((val) => val.checked == true)
      .map((temp) => temp.opt_id);
    setLiftUpData(optId);
    console.log("optId",optId);
  };

  
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View>
          {allMcq?.options.map((data, i) => {
            // console.log("isChecked",data?.checked);
            return (
              <TouchableOpacity style={styles.SurvayOptions} key={i} onPress={() => handleChange(data.opt_id)}>
                <CheckBox
                  style={{ padding: 5 }}
                  onClick={() => handleChange(data.opt_id)}
                  isChecked={data.checked}
                  checkBoxColor="#2C8892"
                />
                <Text style={styles.optionS}>{data.options}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SurvayCheckBoxMcq;
