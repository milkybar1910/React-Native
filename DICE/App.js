import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

const App = () => {
  const [diceImageLeft, setDiceImageLeft] = useState(Dice1);
  const [diceImageRight, setDiceImageRight] = useState(Dice1);

  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    if (randomNumber == 1) {
      setDiceImageLeft(Dice1);
    } else if (randomNumber == 2) {
      setDiceImageLeft(Dice2);
    } else if (randomNumber == 3) {
      setDiceImageLeft(Dice3);
    } else if (randomNumber == 4) {
      setDiceImageLeft(Dice4);
    } else if (randomNumber == 5) {
      setDiceImageLeft(Dice5);
    } else if (randomNumber == 6) {
      setDiceImageLeft(Dice6);
    }
    if (randomNumber2 == 1) {
      setDiceImageRight(Dice1);
    } else if (randomNumber2 == 2) {
      setDiceImageRight(Dice2);
    } else if (randomNumber2 == 3) {
      setDiceImageRight(Dice3);
    } else if (randomNumber2 == 4) {
      setDiceImageRight(Dice4);
    } else if (randomNumber2 == 5) {
      setDiceImageRight(Dice5);
    } else if (randomNumber2 == 6) {
      setDiceImageRight(Dice6);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.DiceView}>
        <Image source={diceImageLeft} style={styles.image1} />
        <Image source={diceImageRight} style={styles.image2} />
      </View>
      <TouchableOpacity style={styles.button} onPress={rollTheDice}>
        <Text style={styles.buttonText}>ROLL</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#222831" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },

  DiceView: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    width: 150,
    height: 150,
  },
  image2: {
    width: 150,
    height: 150,
  },
  buttonText: {
    margin: 40,
    marginTop: 50,
    fontSize: 15,
    backgroundColor: '#123456',
    color: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontWeight: 'bold',
  },
});
