import {HomeScreen} from '../screens/HomeScreen';
import {PopulationScreen} from '../screens/PopulationScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator({
  screens: {
    Home: {screen: HomeScreen, options: {title: 'Home'}},
    PopulationScreen: PopulationScreen,
  },
});

export type RootNavigationType = {
  Home: undefined;
  PopulationScreen: undefined;
};
