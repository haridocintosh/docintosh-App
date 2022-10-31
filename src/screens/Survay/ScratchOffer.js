import { View, Text, SafeAreaView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import scratchCard from '../../assets/images/scratchCard.png';


// const HEIGHT = 380;
// const WIDTH = 540;

const ScratchOffer = () => {
  
  // const [isDrawing, setIsDrawing] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [startY, setStartY] = useState(0);

  // const canvasRef = React.createRef();


  // const scratchStart = (e) => {
  //   const { layerX, layerY } = e;

  //   setIsDrawing(true);
  //   setStartX(layerX);
  //   setStartY(layerY);

  //   // this.setState({
  //   //   isDrawing: true,
  //   //   startX: layerX,
  //   //   startY: layerY
  //   // });
  // };

  // const scratch = (e) => {
  //   const { layerX, layerY } = e;
  //   const context = canvasRef.current.getContext("2d");

  //   if (!isDrawing) {
  //     return;
  //   }

  //   context.globalCompositeOperation = "destination-out";
  //   context.beginPath();
  //   context.moveTo(startX, startY);
  //   context.lineTo(layerX, layerY);
  //   context.closePath();
  //   context.stroke();

  //   // setState({
  //   //   startX: layerX,
  //   //   startY: layerY
  //   // });
  //   setStartX(layerX);
  //   setStartY(layerY);
  // };

  // const scratchEnd = (e) => {
  //   // this.setState({
  //   //   isDrawing: false
  //   // });
  //   setIsDrawing(false);
  // };

  // useEffect(() => {
  //   const Canvas = canvasRef.current;
  //   const context = Canvas.getContext("2d");

  //   Canvas.addEventListener("mousedown", scratchStart);
  //   Canvas.addEventListener("mousemove", scratch);
  //   Canvas.addEventListener("mouseup", scratchEnd);

  //   Canvas.addEventListener("touchstart", scratchStart);
  //   Canvas.addEventListener("touchmove", scratch);
  //   Canvas.addEventListener("touchend", scratchEnd);

  //   context.fillStyle = "#ddd";
  //   context.fillRect(0, 0, WIDTH, HEIGHT);
  //   context.lineWidth = 60;
  //   context.lineJoin = "round";

  // }, [])








  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#E6E6E6',padding:10}}>
        <View>
           <Text>ScratchCards</Text>
        </View>
        <Image source={scratchCard} style={{width:"100%",height:400,borderRadius:10}}/>

      {/* <View
        ref={canvasRef}
        id="Canvas"
        width={`${WIDTH}px`}
        height={`${HEIGHT}px`}
      /> */}

    </SafeAreaView>
    
  )
}

export default ScratchOffer