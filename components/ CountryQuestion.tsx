import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  countryList: { name: string; population: number }[];
  onAnswer: (answer: string) => void;
};

export const CountryQuestion = ({ countryList, onAnswer }: Props) => {
  // Randomizing the order of the countries

  return (
    <View>
      <Text style={styles.question}>
        Please choose the most populated country
      </Text>
      <View style={styles.buttonArea}>
        {countryList.map(country => (
          <TouchableOpacity
            key={country.name}
            style={styles.button}
            onPress={() => onAnswer(country.name)}>
            <Text style={styles.label}>
              {country.name} ({country.population})
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 2,
    margin: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  label: {
    fontSize: 24,
    color: 'darkgray',
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
