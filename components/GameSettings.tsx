import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';

type Props = {
  setGameSettings: (settings: {
    numCountries: number;
    difficulty: number;
  }) => void;
};

export const GameSettings = ({ setGameSettings }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Game Settings</Text>
      <Formik
        initialValues={{ numCountries: '5', difficulty: '6' }}
        onSubmit={values => {
          setGameSettings({
            numCountries: Math.min(
              10,
              Math.max(3, parseInt(values.numCountries, 10)),
            ),
            difficulty: Math.min(
              10,
              Math.max(1, parseInt(values.difficulty, 10)),
            ),
          });
        }}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <Text>Number of Countries: </Text>
              <TextInput
                style={styles.field}
                onChangeText={handleChange('numCountries')}
                value={values.numCountries}
                placeholder="Number of countries"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text>Difficulty:</Text>
              <TextInput
                style={styles.field}
                onChangeText={handleChange('difficulty')}
                onBlur={handleBlur('difficulty')}
                value={values.difficulty}
                placeholder="Difficulty"
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}>
              <Text>Start Game</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  label: {
    fontSize: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  field: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    margin: 4,
    width: '80%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});
