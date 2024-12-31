import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { PopulationScreen } from '../screens/PopulationScreen';
import { GDPScreen } from '../screens/GDPScreen';
import Icon from '@react-native-vector-icons/ant-design';
import React from 'react';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon name="home" /> }}
      />
      <Tab.Screen
        name="Population"
        component={PopulationScreen}
        options={{ tabBarIcon: () => <Icon name="smile" /> }}
      />
      <Tab.Screen
        name="GDP"
        component={GDPScreen}
        options={{ tabBarIcon: () => <Icon name="thunderbolt" /> }}
      />
    </Tab.Navigator>
  );
}
