import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,StatusBar} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBG =()=>{
    let color = 'rgb('+
    Math.floor(Math.random() *256) +
      ','+
      Math.floor(Math.random() *256)+
      ','+
      Math.floor(Math.random() *256)+
      ')';
      setRandomColor(color)
  }

  const changeBlack =() =>{
    setRandomColor('#111111')
  }
  return (

    <>
    <StatusBar backgroundColor={randomColor} />
    <View style={[styles.container, {backgroundColor: randomColor}]}>
    <TouchableOpacity onPress={changeBG}>
      <Text style={styles.text}>RANDOM BG</Text>
      </TouchableOpacity>

    <TouchableOpacity onPress={changeBlack}>
      <Text style={styles.text2}>Reset</Text>

      </TouchableOpacity>
    </View>
    </>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
  text2: {
    marginTop:15,
    fontSize: 30,
    
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
    backgroundColor:"#111111"
  },
});
