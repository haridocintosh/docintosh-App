import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import CustomButton from '../components/CustomButton';

import InputField from '../components/InputField';
import { SvgUri } from 'react-native-svg';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState('first');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnable={true}
            style={{paddingHorizontal: 25}}>

          <View style={{paddingTop :20, marginTop :50}}>

            <Text  style={styles.headingtext}
            >
              Hey There!
            </Text>
            <Text style={styles.headingpara}
            >
              Welcome to Docintosh. Let’s create your account. 
            </Text>
            </View>
           
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 30,
                
              }}>
              <TouchableOpacity
                onPress={() => {}}
                >
                <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/google.svg" />
          
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
               >

            <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/facebook%20%282%29.svg" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                >
                  <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/linkdin.svg" />
              </TouchableOpacity>
            </View>
    
            <Text  style={styles.headingpara2}>
              Or
            </Text>

            
            <InputField label={'First Name'} />
            <InputField label={'Last Name'} />
    
            <InputField
              label={'Email ID'}
              keyboardType="email-address"
            />

          <InputField label={'Mobile Number'} />

              <View  style={{ display:"flex" ,flexDirection:"row",alignItems:'center'}}>
                <Text>You are :</Text>
                <View style={{flex:0}}>
                <RadioButton style={{}}
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                /> 
              
              </View>
              <Text>Doctor</Text>
              <View style={{flex:0}}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
     
      </View>
      <Text>Student</Text>
              </View>
        

          <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Speciality"
              listMode="SCROLLVIEW"
            />
          <View style={{ marginBottom: 30}} ></View>

          <CustomButton label={'Continue'} onPress={() => navigation.navigate('Login')} />
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>Already registered?</Text>
              <TouchableOpacity >
                <Text style={{color: '#AD40AF', fontWeight: '700'}} onPress={() => navigation.navigate('Login')}> Login</Text>
              </TouchableOpacity>
            </View>
            <View>
     
    </View>

          </ScrollView>
        </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({
  headingtext:{
    fontSize: 24,
    fontWeight: '700',
    color: '#071B36',
     // fontFamily: 'Inter_900Black',
  },
  headingpara:{
     // fontFamily: 'Inter_900Black',
     fontSize: 14,
     fontWeight: '400',
     color: '#333',
     marginBottom: 30,
     //fontFamily: 'Plus Jakarta Sans',
     fontStyle: 'normal',
     lineHeight: 20,
     letterSpacing: 1,
     color: '#687690',
  },
  headingpara2:{
    // fontFamily: 'Inter_900Black',
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    marginBottom: 30,
    //fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#8C97AB',
    textAlign: 'center',
  },
});