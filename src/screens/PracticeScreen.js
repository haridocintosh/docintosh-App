import React , {useState, useEffect} from 'react';
import { StyleSheet, View, Text , ScrollView} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useFonts } from 'expo-font';


const PracticeScreen = () => {
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');

    const [loaded] = useFonts({
      Montserrat: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    });
  
    if(!loaded) {
      return null;
    }
      
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 30,
        marginTop: 40,
        marginBottom :40,
      }}
    >
      <FloatingLabelInput
        label="Birthday"
        value={birthday}
        mask="99/99/9999"
        keyboardType="numeric"
        onChangeText={value => setBirthday(value)}
      />
      <FloatingLabelInput
        label="Phone"
        value={phone}
        mask="(99)99999-9999"
        keyboardType="numeric"
        onChangeText={value => setPhone(value)}
      />
      <FloatingLabelInput 
       style= {{ marginTop :40, paddingVertical: 10, }}
        label="Price"
        value={price}
        maskType="currency"
        currencyDivider="." // which generates: 9.999.999,99 or 0,99 ...
        keyboardType="numeric"
        onChangeText={value => setPrice(value)}
      />

<Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Montserrat</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
  });

export default PracticeScreen