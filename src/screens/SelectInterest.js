import {  View,
  Text, 
  StyleSheet,
  FlatList,
  TextInput } from 'react-native'
import React, {useState, useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import { mainApi } from '../apis/constant';
import { useNavigation } from '@react-navigation/native';
const styelcss = require('../assets/css/style');
import Toast from 'react-native-simple-toast';

const SelectInterest = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [selectitem,setselectitem]=useState('');
 
  const getItem = (item) => {
    let spl=item.speciality_id;
    let copy=[...selectitem];
    copy =[...copy,spl]
   setselectitem(copy)
   //console.log('selectarray', selectitem);
  const newItem = filteredDataSource.map((val)=>{
    //console.log(item.speciality_id);
    if(val.speciality_id===item.speciality_id){
      return {...val, isSelected:!val.isSelected }
    }else{
      return val
    }
  })
  //console.log("dsandsjdnk",newItem);
  setFilteredDataSource(newItem);

  var array = [...selectitem]; // make a separate copy of the array
  var index = array.indexOf(spl)
    if(index !== -1) {
      array.splice(index, 1);
      setselectitem(array);
     // console.log('deletearray',selectitem);
    }
  };
  const navigation = useNavigation();
  
  useEffect(() => {
    fetch(`${mainApi.baseUrl}/ApiController/getSpecialities`)
      .then((response) => response.json())
      .then((responseJson) => {
      // console.log(responseJson);
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.speciality
          ? item.speciality
          : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
    <View style={styles.item}>
      <Text style={[styles.itemStyle]} onPress={() => getItem(item)}>
        {'#'}{item.speciality}{item.isSelected? ' ': <Ionicons style={styles.searchIcon} name="close-circle" size={20} color="#000"/> }
      </Text>
    </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.6,
          width: '100%',
          margin: 1
        }}
      />
    );
  };

  const handleSubmit = ()=>{
    if(selectitem == ''){
      Toast.show('Please Select Your Interest');
    }else{
      navigation.navigate('ContactPermission');
    }
  }

  return (
    <View style={{paddingTop:0,}}>
  
      <View style={styles.container}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
      </View>
      <View style={{marginTop:10, paddingHorizontal:20, }}>
     
        <FlatList
          columnWrapperStyle={styles.tagView}
          data={filteredDataSource}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
         // contentContainerStyle={{ flexDirection: 'column',height:"100%" , width:"100%" }}
         numColumns={2}
        // nestedScrollEnabled={false}
        />
      </View>

      <View style={{marginTop:0,zIndex:1,width:"100%",backgroundColor:"#f1f1f1",position:"absolute",bottom:35,paddingHorizontal:20}}>
          <CustomButton label={'Continue'} onPress={() => handleSubmit()}   />
      </View>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
  marginTop:6,
  marginHorizontal:20,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:8,
    
  },
  itemStyle: {
    display:"flex",
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:5,
   // marginLeft:10,
    color: "#51668A",
    width:"100%",
    height:"auto",
    backgroundColor:"#fff",
    borderRadius:8,
    borderWidth:1,
    borderColor:"#45B5C0",
    justifyContent:"space-between"
  },
  item:{
    marginLeft:10
  },

  tagView: {
    flexWrap: "wrap",
    },

  textInputStyle: {
   flex: 1,
   paddingTop: 10,
   paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius:8,
  },
  searchIcon: {
    padding: 10,
},


});



export default SelectInterest