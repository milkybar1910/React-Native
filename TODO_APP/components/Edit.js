import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Text, Button, Form, Input, H1, Item, Container} from 'native-base';
import Snackbar from 'react-native-snackbar';

import AsyncStorage from '@react-native-community/async-storage';

import shortid from 'shortid';

const Edit = ({navigation, route}) => {
  const [id, setId] = useState(null);
  const [todo, setTodo] = useState('');
  const [deadLine, setDeadLine] = useState('');

  const buttonPressed = async () => {
    try {
      if (!todo || !deadLine) {
        return Snackbar.show({
          text: 'Enter the required inputs',
          duration: Snackbar.LENGTH_SHORT,
        });
      }

      const TodoObject = {
        id,
        todo,
        deadLine,
      };

      const storedValue = await AsyncStorage.getItem('@todo_lists');
      const list = await JSON.parse(storedValue);

      list.map((oneTODO) => {
        if (oneTODO.id == id) {
          oneTODO.todo = todo;
          oneTODO.deadLine = deadLine;
        }
        return oneTODO;
      });

      await AsyncStorage.setItem('@todo_lists', JSON.stringify(list));
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {elements} = route.params;
    const {id, todo, deadLine} = elements;

    setId(id);
    setTodo(todo);
    setDeadLine(deadLine);
  }, []);

  return (
    <Container>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Form>
          <Item rounded style={styles.Item}>
            <Input
              placeholder="Enter the TODO"
              placeholderTextColor="#c1c1c1"
              style={{color: '#111', textAlign: 'center'}}
              value={todo}
              onChangeText={(todo) => {
                setTodo(todo);
              }}
            />
          </Item>
          <Item rounded style={styles.Item}>
            <Input
              style={{color: '#111', textAlign: 'center'}}
              placeholder="Deadline(no.of days)"
              placeholderTextColor="#c1c1c1"
              value={deadLine}
              onChangeText={(deadLine) => {
                setDeadLine(deadLine);
              }}
            />
          </Item>
          <Button block style={styles.button} onPress={buttonPressed}>
            <Text>Update TODO</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Edit;

const styles = StyleSheet.create({
  //for the input box
  Item: {
    borderColor: '#111',
    marginVertical: 20,
  },
  //for the input
  inputText: {},
  button: {
    backgroundColor: '#0A79DF',
  },
});
