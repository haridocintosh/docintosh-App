import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';

const PracticeScreen = () => {
 // const animationRef = useRef(null)

  // useEffect(() => {
  //   animationRef.current?.play()
  //   // Or set a specific startFrame and endFrame with:
  //   animationRef.current?.play(60, 180);
  // })

  return (
    <Lottie
    source={require('../assets/dr-icon/congratulation.json')}
      autoPlay
      loop
    />
  );
}



export default PracticeScreen