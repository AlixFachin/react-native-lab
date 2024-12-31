/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStack} from './components/RootStackNavigation';
import {BottomTabs} from './components/BottomTabNavigation';

function App(): React.JSX.Element {
  const Navigation = createStaticNavigation(RootStack);

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
