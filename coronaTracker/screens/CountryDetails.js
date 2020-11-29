import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {Container, View} from 'native-base';
import moment from 'moment';

const CountryDetails = ({navigation, route}) => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const data = route.params;
    const CountryDetails = data.country;
    setCountryData(CountryDetails);
  }, []);

  return (
    <Container style={styles.container}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            marginTop: 25,
            backgroundColor: '#EAF0F1',
            padding: 5,
          }}>
          <Text
            style={{
              color: '#111',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 17,
              padding: 5,
              textAlign: 'center',
            }}>
            {countryData.name}
          </Text>
          <Text
            style={{
              color: '#111',

              padding: 7,
              textAlign: 'center',
            }}>
            Updated at {moment(countryData.updated_at).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View style={{backgroundColor: '#EAF0F1'}}>
          <Text style={{padding: 6, marginTop: 5}}>
            Total Population : {countryData.population}
          </Text>

          <Text style={{padding: 6, marginTop: 5}}>
            Total Deaths: {countryData.latest_data?.deaths}
          </Text>

          <Text style={{padding: 6, marginTop: 5}}>
            Total Confirmed: {countryData.latest_data?.confirmed}
          </Text>

          <Text style={{padding: 6, marginTop: 5}}>
            Total Recovered: {countryData.latest_data?.recovered}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 6, marginTop: 5}}>Total Critical : </Text>

            <Text style={{marginTop: 5, padding: 6, color: 'red'}}>
              {countryData.latest_data?.critical}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#EAF0F1',
            marginTop: 25,
          }}>
          <Text
            style={{
              color: '#111',

              fontWeight: 'bold',
              fontSize: 17,
              padding: 5,
            }}>
            TODAY'S INFORMATION
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 6, marginTop: 5, color: '#111'}}>
              Death {'         '} :
            </Text>

            <Text style={{padding: 6, marginTop: 5, color: 'red'}}>
              {countryData.today?.deaths}
            </Text>
          </View>
          <Text style={{padding: 6, marginTop: 5}}>
            Confirmed {'  '}: {'  '}
            {countryData.today?.confirmed}
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});
