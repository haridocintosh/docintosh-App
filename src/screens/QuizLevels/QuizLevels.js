import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { styles } from "./QuizLevelsStyles";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import McqListModal from "./McqListModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { quizPostData } from "../../../redux/reducers/mcqSlice";
import { useFonts } from "expo-font";

const QuizLevels = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [topicId, setTopicId] = useState(null);
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();

  const McqDataHandle = (topicId) => {
    setToggle(true);
    setTopicId(topicId);
  };

  const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem("USER_INFO");
    const data = await JSON.parse(jsonValue);
    const result = JSON.parse(data)["data"];
    fetchPostData(
      result["role"],
      result["city_id"],
      result["assoc_id"],
      result["circle_type"],
      result["id"]
    );
  };

  const fetchPostData = async (
    role,
    city_id,
    assoc_id,
    circle_type,
    userId
  ) => {
    const postDetails = { role, city_id, assoc_id, circle_type, userId };
    const result = await dispatch(quizPostData(postDetails));
    // console.log('jdjdbj',result.payload);
    setQuizData(result.payload);
    setLoader(false);
  };
  //console.log('checkData',Object.values(quizData))
  useEffect(() => {
    asyncFetchDailyData();
  }, []);

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#2C8892"} />
      </View>
    );
  }
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
    <View style={styles.QuizLevelcontainer}>
      {toggle && (
        <McqListModal
          toggle={setToggle}
          quizData={quizData}
          topicId={topicId}
        />
      )}
      {/* <LinearGradient colors={['transparent', '#08A099']} style={styles.circleView}/> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnable={true}
      >
        {/* <ActivityIndicator color={"#2C8892"}/> */}

        {quizData &&
          quizData?.map((user, index) => {
            return (
              <TouchableOpacity
                onPress={() => McqDataHandle(user?.topic_id, user?.title)}
                key={index}
              >
                <LinearGradient
                  colors={["#43c5bf", "#15b3ac"]}
                  start={{ x: 0.0, y: 1.0 }}
                  end={{ x: 1.0, y: 1.0 }}
                  style={styles.cartGradiant}
                >
                  <Text style={styles.cartText}>{user.title}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default QuizLevels;
