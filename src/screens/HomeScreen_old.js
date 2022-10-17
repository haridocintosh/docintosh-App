import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {freeGames, paidGames, sliderData} from '../model/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen() {
  const [gamesTab, setGamesTab] = useState(1);
  const [data, setdata] = useState();
  const navigation = useNavigation();

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

//   const getData = async (key) => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       setdata(jsonValue != null ? JSON.parse(jsonValue) : null)
//     } catch(e) {
//      console.log(e)
//     }
// }

// useEffect(() => {
//   getData('USER_INFO')
// },[])

 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
  
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18}}>
            Hello John Doe
            
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>

       

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}

        
      </ScrollView>
    </SafeAreaView>
  );
}