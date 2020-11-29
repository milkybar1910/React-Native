import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {
  Container,
  Text,
  List,
  ListItem,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

import Axios from 'axios';

//URL TO HIT
const URL = 'https://corona-api.com/countries';

//list heading
var countryDivider = '';

//To create list heading
function CountryDivider({country}) {
  if (countryDivider == '') {
    countryDivider = country.name[0];

    return (
      <ListItem itemDivider style={{backgroundColor: '#111'}}>
        <Text style={{color: '#c1c1c1', marginVertical: 5}}>
          {countryDivider}
        </Text>
      </ListItem>
    );
  } else if (country.name[0] == countryDivider) {
    return <></>;
  } else {
    countryDivider = country.name[0];
    return (
      <ListItem itemDivider style={{backgroundColor: '#111'}}>
        <Text style={{color: '#c1c1c1', marginVertical: 5}}>
          {countryDivider}
        </Text>
      </ListItem>
    );
  }
}

const CountryList = ({navigation}) => {
  //Storing the CORONA data
  const [coronaCountryData, setCoronaCountryData] = useState([]);

  //Hitting the CORONA API
  const getCoronaDetails = async () => {
    const response = await Axios.get(URL);
    const coronaData = response.data.data;
    setCoronaCountryData(coronaData);
  };

  //preloading the data
  useEffect(() => {
    getCoronaDetails();
  }, []);

  return (
    <Container style={styles.container}>
      <ScrollView>
        {coronaCountryData
          .sort((country1, country2) => country1.name > country2.name)
          .map((country) => (
            <List key={country.name}>
              <CountryDivider country={country} />
              <ListItem
                onPress={() => navigation.navigate('CountryDetails', {country})}
                icon>
                <Left style={{margin: '0%'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#FFF',
                      margin: '0%',
                    }}>
                    {country.code}
                  </Text>
                </Left>
                <Body>
                  <Text style={styles.text}>{country.name}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" active />
                </Right>
              </ListItem>
            </List>
          ))}
      </ScrollView>
    </Container>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
  },
  text: {
    color: '#FFF',
  },
});
