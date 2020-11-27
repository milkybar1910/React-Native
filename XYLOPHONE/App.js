import React from 'react'
import { StyleSheet, Text, View ,StatusBar, TouchableOpacity } from 'react-native'
import Sound from "react-native-sound"

const Sounds = {
  0:require("./assets/note1_c.wav"),
  1:require("./assets/note2_d.wav"),
  2:require("./assets/note3_e.wav"),
  3:require("./assets/note4_f.wav"),
  4:require("./assets/note5_g.wav"),
  5:require("./assets/note6_a.wav"),
  6:require("./assets/note7_b.wav"),
}


const App = () => {

  const buttonPressed =(number) =>{
    let sound = Sounds[number];
    console.log(sound);
    const soundObject = new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
      if(err){
        console.log("ERROR IN PLAYING SOUND");
      }
    })

    setTimeout(()=>{
      soundObject.play()
    },5)
    soundObject.release()

  }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={()=>buttonPressed(0)}><Text style={styles.Music1}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(1)}><Text style={styles.Music2}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(2)}><Text style={styles.Music3}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(3)}><Text style={styles.Music4}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(4)}><Text style={styles.Music5}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(5)}><Text style={styles.Music6}></Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>buttonPressed(6)}><Text style={styles.Music7}></Text></TouchableOpacity>
     
     
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:"center"
},
Music1:{
  
  paddingHorizontal:20,
  backgroundColor:"#BB2CD9",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  
},
Music2:{
  paddingHorizontal:20,
  backgroundColor:"#1287A5",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
Music3:{
  paddingHorizontal:20,
  backgroundColor:"#0A79DF",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
Music4:{
  paddingHorizontal:20,
  backgroundColor:"#45CE30",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
Music5:{
  paddingHorizontal:20,
  backgroundColor:"#FAC42F",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
Music6:{
  paddingHorizontal:20,
  backgroundColor:"orange",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
Music7:{
  paddingHorizontal:20,
  backgroundColor:"#FF3031",
  marginHorizontal:15,
  height:70,
  alignItems:"stretch",
  marginTop:20
},
})


/* */