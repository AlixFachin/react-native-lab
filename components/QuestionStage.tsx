// This will be the component dealing with one "stage", i.e a question/answer pair

import React, { useState, useEffect, useMemo } from 'react';
import { getRandomCountries } from '../lib/WorldBankData';
import { CountryQuestion } from './ CountryQuestion';
import { CountryAnswer } from './CountryAnswer';
import { Text, View } from 'react-native';

type PopulationData = {
  name: string;
  population: number;
};

type Props = {
  gameSettings: {
    numCountries: number;
    difficulty: number;
  };
  questionNumber: number;
  score: number;
  onNextStage: (score: number) => void;
};

type stage = 'question' | 'answer';

export const QuestionStage = ({
  gameSettings,
  questionNumber,
  score,
  onNextStage,
}: Props) => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [stage, setStage] = useState<stage>('question');
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    setPopulationData(
      getRandomCountries(gameSettings.numCountries, gameSettings.difficulty),
    );
    setStage('question');
    setAnswer(null);
  }, [gameSettings, questionNumber]);

  const countryWithMaxPopulation = useMemo(() => {
    return populationData.reduce((acc, country) => {
      return country.population > acc.population ? country : acc;
    }, populationData[0]);
  }, [populationData]);

  if (stage === 'question') {
    return (
      <View>
        <Text>
          Question {questionNumber}, score: {score}
        </Text>
        <CountryQuestion
          countryList={populationData}
          onAnswer={selectedAnswer => {
            setAnswer(selectedAnswer);
            setStage('answer');
          }}
        />
      </View>
    );
  }

  return (
    <CountryAnswer
      countryList={populationData}
      rightAnswer={countryWithMaxPopulation.name}
      selectedAnswer={answer || ''}
      onExit={() =>
        onNextStage(answer === countryWithMaxPopulation.name ? 1 : 0)
      }
    />
  );
};
