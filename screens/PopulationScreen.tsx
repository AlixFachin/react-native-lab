import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import { GameSettings } from '../components/GameSettings';
import { QuestionStage } from '../components/QuestionStage';

type GameState = 'settings' | 'results' | number;

const NUMBER_QUESTIONS = 5;

export const PopulationScreen = () => {
  const [gameSettings, setGameSettings] = useState({
    numCountries: 5,
    difficulty: 6,
  });

  const [gameStage, setGameStage] = useState<GameState>('settings');
  const [score, setScore] = useState(0);

  const nextQuestionTransition = useCallback(
    (questionScore: number) => {
      if (gameStage === 'results' || gameStage === 'settings') {
        // Woops
        return;
      }
      setScore(currentScore => currentScore + questionScore);
      if (gameStage === NUMBER_QUESTIONS) {
        setGameStage('results');
      } else {
        setGameStage(gameStage + 1);
      }
    },
    [gameStage],
  );

  const currentScreen = useMemo(() => {
    if (gameStage === 'settings') {
      return (
        <GameSettings
          setGameSettings={settings => {
            setGameSettings(settings);
            setGameStage(1);
          }}
        />
      );
    }
    if (gameStage === 'results') {
      return <Text>Score: {score}</Text>;
    }
    return (
      <QuestionStage
        onNextStage={nextQuestionTransition}
        gameSettings={gameSettings}
        questionNumber={gameStage}
        score={score}
      />
    );
  }, [gameStage, score, nextQuestionTransition, gameSettings]);

  return <View style={Styles.container}>{currentScreen}</View>;
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
