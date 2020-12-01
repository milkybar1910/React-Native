import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  List,
  ListItem,
  H1,
  Title,
  CheckBox,
  Icon,
  Body,
  Spinner,
  Fab,
  Text,
  Left,
  Right,
  Button,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  //used to remount the component
  const isFocused = useIsFocused();

  //to delete the todo
  const deleteTodo = async (id) => {
    const newList = await todos.filter((list) => list.id !== id);
    await AsyncStorage.setItem('@todo_lists', JSON.stringify(newList));
    setTodos(newList);
  };

  //GETTING THE VALUES IN LOCAL STORAGE
  const localStorageObject = async () => {
    setLoading(true);
    const storedValue = await AsyncStorage.getItem('@todo_lists');

    if (!storedValue) {
      setTodos([]);
    } else {
      const TODOS = await JSON.parse(storedValue);
      setTodos(TODOS);
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorageObject();
  }, [isFocused]);

  if (loading) {
    return <Spinner color="blue" />;
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {todos.length == 0 ? (
          <Container>
            <H1
              style={{
                margin: 20,
                textAlign: 'center',
              }}>
              TODO list is empty.
            </H1>
            <H1
              style={{
                margin: 20,
                textAlign: 'center',
              }}>
              Add Your TODOs
            </H1>
          </Container>
        ) : (
          <Container>
            <List>
              {todos.map((elements) => (
                <ListItem key={elements.id}>
                  <Left>
                    <Button
                      danger
                      onPress={() => {
                        deleteTodo(elements.id);
                      }}
                      style={{marginRight: 10}}>
                      <Icon name="trash" active style={{fontSize: 20}} />
                    </Button>
                    <Button
                      onPress={() => {
                        navigation.navigate('Edit', {elements});
                      }}>
                      <Icon name="edit" type="Feather" />
                    </Button>
                  </Left>
                  <Body>
                    <Title style={{color: '#111'}}>{elements.todo}</Title>
                    <Text>{elements.deadLine} days</Text>
                  </Body>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
        <Fab
          style={{backgroundColor: '#0A79DF'}}
          onPress={() => navigation.navigate('Add')}
          position="bottomRight">
          <Icon name="add" />
        </Fab>
      </ScrollView>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  topHeading: {
    color: '#121',
    textAlign: 'center',
    marginVertical: 20,
  },
});
