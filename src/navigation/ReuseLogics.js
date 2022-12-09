import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native"; 


const handleMessage = () => {
  alert("Successfully completed registration please login")
  setTimeout(() => {
    navigation.navigate('Login')
   }, 2000);
}

export const showHeaderItem = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
};
export const showHeaderItemBackless = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
      headerLeft: () => <Text/>
};

// export const showHeaderItemSkip = {
//        headerShown: true, 
//        headerStyle: { backgroundColor: '#071B36'},
//        headerTintColor: '#fff',
//        headerRight: () => (
//         <Text onPress={() => navigation.navigate('Login')} style={{color:"#2376E5"}}>Skip</Text>
//       )
//   };
// export const showHeaderItemSkipf = {
//         headerShown: true, 
//         headerStyle: { backgroundColor: '#071B36'},
//         headerTintColor: '#fff',
//        headerRight: () => (
//         <Text onPress={() => handleMessage()} style={{color:"#2376E5"}}>Skip</Text>
//         )
//   };