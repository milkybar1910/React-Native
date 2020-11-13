import React from 'react'
import { StyleSheet, Text, View ,StatusBar,ScrollView,Image,TouchableOpacity} from 'react-native'
import Sound from "react-native-sound"


const soundList =[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav')
]

const App = () => {

  const playSound =(sound)=>{
    const soundObject = new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
      if(err){
        console.log("ERROR IN PLAYING SOUND");
      }
    })

    setTimeout(()=>{
      soundObject.play()
    },100)
    soundObject.release()

  }

  return (
    <ScrollView style={styles.container}>
    <Image style={styles.logo} source={require("./assets/logo.png")}/>
    <View style={styles.gridContainer}>
      {soundList.map((sound)=>(
        <TouchableOpacity key={sound} onPress={()=>playSound(sound)} style={styles.box}>
          <Text style={styles.text}>{sound}</Text>
        </TouchableOpacity>
      ))}
      </View>
      <StatusBar />
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
   
},
logo:{
  alignSelf:"center",
  marginTop:15
},
gridContainer:{
  flex:1,
  flexDirection:"row",
  flexWrap:"wrap",
  alignItems:"flex-start",
  justifyContent:"space-around"
},
box:{
  height:110,
  alignItems:"center",
  justifyContent:"center",
  width:"46%",
  marginVertical:6,
  backgroundColor:"#0A79DF",
  borderWidth:3,
  borderColor:"#FFF",
  shadowColor:"#333945",
  elevation:4
},
text:{
  fontSize:50,
  color:"#FFF"
}
})
