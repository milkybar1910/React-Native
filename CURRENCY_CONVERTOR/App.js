import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Snackbar from "react-native-snackbar"

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);


  const buttonPressed =(currency) =>{
    if(!inputValue ){
      return Snackbar.show({
        text:"PLEASE ENTER VALID INPUT",
        backgroundColor:"#111",
        textColor:"#FFF"
        
      })
    }
      let result = currencyPerRupee[currency] * parseFloat(inputValue);
      
      setResultValue(result.toFixed(2));
    
  }

  return (
    <View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatict">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputValue}
              keyboardType="numeric"
              placeholder="Enter Value "
              placeholderTextColor="#EAF0F1"
              value={inputValue}
              onChangeText={(inputValue) => setInputValue(inputValue)}
              ></TextInput>
          </View>

          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity key={currency} style={styles.convertorButton} onPress={()=>buttonPressed(currency)}>
                <Text style={styles.buttons}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A79DF',
    elevation: 4,
    shadowColor: '#2C3335',
    borderWidth: 5,
    borderColor: '#FFF',
  },
  resultValue: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A79DF',
    elevation: 4,
    shadowColor: '#2C3335',
    borderWidth: 5,
    borderColor: '#FFF',
  },
  inputValue: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign:"center"
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  buttons: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  },
  convertorButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#0A79DF',
  },
});
