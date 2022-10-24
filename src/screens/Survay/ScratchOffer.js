import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ScratchCard } from 'rn-scratch-card';
import scratchCard from '../../assets/images/scratchCard.png'

const ScratchOffer = () => {

  const handleScratch = () => {
    console.log("nath");
  }
  return (
    <SafeAreaView  style={{flex:1,backgroundColor:'#E6E6E6'}}>
        <View>
           <Text>ScratchCard</Text>
        </View>

        <ScratchCard
            source={scratchCard}
            brushWidth={50}
            onScratch={handleScratch}
            // style={styles.scratch_card}
        />
    </SafeAreaView>
    
  )
}

export default ScratchOffer