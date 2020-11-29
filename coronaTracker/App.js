import React, {useEffect, useState} from 'react';

//React Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Button, Icon} from 'native-base';
import CountryList from './screens/CountryList';
import CountryDetails from './screens/CountryDetails';

const App = () => {
  //Stack has been created here
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CountryList">
        <Stack.Screen
          name="CountryList"
          component={CountryList}
          options={{
            headerStyle: {
              backgroundColor: '#3C40C6',
            },
            title: 'COUNTRIES',
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              marginVertical: 4,
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This feature is not yet added')}
                transparent>
                <Icon
                  name="search"
                  active
                  type="FontAwesome"
                  style={{color: '#FFF'}}
                />
              </Button>
            ),
          }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{
            headerStyle: {
              backgroundColor: '#3C40C6',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
