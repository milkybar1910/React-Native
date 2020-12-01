import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';

//bring in all screens

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#0A79DF',
            },
            title: 'TODOS',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#FFF',
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {
              backgroundColor: '#0A79DF',
            },
            title: 'Add Your TODOS',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#FFF',
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {
              backgroundColor: '#0A79DF',
            },
            title: 'EDIT YOUR TODO',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#FFF',
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
