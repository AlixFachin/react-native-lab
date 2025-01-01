import React from 'react';
import { Colors } from '../styles/Colors';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  countryList: { name: string; population: number }[];
  rightAnswer: string;
  selectedAnswer: string;
  onExit: () => void;
};

export const CountryAnswer = ({
  countryList,
  selectedAnswer,
  rightAnswer,
  onExit,
}: Props) => {
  const getButtonStyle = (country: string) => {
    if (country === selectedAnswer) {
      if (country === rightAnswer) {
        return styles.rightAnswerSelected;
      }
      return styles.wrongAnswerSelected;
    }
    if (country === rightAnswer) {
      return styles.rightAnswer;
    }
    return styles.wrongAnswer;
  };

  return (
    <View>
      <Text style={styles.question}>
        {selectedAnswer === rightAnswer ? 'Correct!' : 'Wrong!'}
      </Text>
      <View style={styles.buttonArea}>
        {countryList.map(country => (
          <View key={country.name} style={getButtonStyle(country.name)}>
            <Text style={styles.label}>
              {country.name} ({country.population})
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={onExit}>
        <Text style={styles.label}>Next!</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyle = {
  borderRadius: 30,
  color: 'black',
  padding: 2,
  margin: 4,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  shadowOffset: { width: 0, height: 2 },
  shadowColor: 'black',
  shadowOpacity: 0.2,
} as const;

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
    marginBottom: 20,
  },
  wrongAnswer: {
    backgroundColor: Colors.rosePale,
    ...buttonStyle,
  },
  rightAnswer: {
    backgroundColor: Colors.pistachio,
    ...buttonStyle,
  },
  rightAnswerSelected: {
    backgroundColor: Colors.asparagus,
    ...buttonStyle,
  },
  wrongAnswerSelected: {
    backgroundColor: Colors.rose,
    ...buttonStyle,
  },
  label: {
    fontSize: 24,
    color: 'black',
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
  button: {
    backgroundColor: Colors.amber,
    borderRadius: 30,
    color: 'black',
    padding: 1,
    margin: 4,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
});
