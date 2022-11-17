import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';

const PracticeScreen = () => {
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current?.play()
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

  return (
    <Lottie
      ref={animationRef}
      source={require('../assets/intro/lone.json')}

    />
  );
}



export default PracticeScreen