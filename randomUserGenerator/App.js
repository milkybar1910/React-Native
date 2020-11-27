import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, Container} from 'native-base';

import Axios from 'axios';
import User from './components/User';

const URL = 'https://randomuser.me/api/';

const App = () => {
  const [userObject, setUserObject] = useState({});

  const getUser = async () => {
    const {data} = await Axios.get(URL);
    const response = data.results[0];
    setUserObject(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <User data={userObject} />
      <View style={styles.View}>
        <Button
          style={styles.Button}
          onPress={() => {
            getUser();
          }}>
          <Text style={{color: '#FFF'}}>New User</Text>
        </Button>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  Button: {
    paddingHorizontal: 20,
  },
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
