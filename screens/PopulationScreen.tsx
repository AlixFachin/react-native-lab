import { View, Text } from 'react-native';
import React from 'react';
import { OneCountryPop } from '../components/OneCountryPop';

export const PopulationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Population Screen</Text>
      <OneCountryPop countryCode="JPN" dateBegin="2010" dateEnd="2019" />
    </View>
  );
};
