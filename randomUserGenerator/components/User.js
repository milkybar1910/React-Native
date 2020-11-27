import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Card, Content, CardItem, Text, Body} from 'native-base';
import moment from 'moment';
const User = ({data}) => {
  return (
    <Container style={styles.container}>
      <Card style={styles.Card}>
        <Image
          source={{
            uri: data.picture?.large,
            width: 100,
            height: 100,
          }}
          style={styles.Image}
        />

        <CardItem style={styles.CardItem}>
          <Text style={{fontWeight: 'bold'}}>
            {data.name?.title} {data.name?.first} {data.name?.last} (
            {data.gender} )
          </Text>
        </CardItem>
        <CardItem style={styles.CardItem}>
          <Text>Age: {data.dob?.age}</Text>
        </CardItem>
        <CardItem style={styles.CardItem}>
          <Text>Age: {moment(data.dob?.age).format('DD-MM-YYYY')}</Text>
        </CardItem>
        <CardItem style={styles.CardItem}>
          <Text>Email: {data.email}</Text>
        </CardItem>
        <CardItem style={styles.CardItem}>
          <Text>Cell: {data.cell}</Text>
        </CardItem>
        <CardItem style={styles.CardItem}>
          <Text>
            Registered at {moment(data.registered?.date).format('DD-MM-YYYY')}
          </Text>
        </CardItem>
      </Card>
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({
  Image: {
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Card: {
    borderColor: '#111',
  },
  CardItem: {
    borderColor: '#111',
  },
});
