import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import EditerScreen from '../screens/EditerScreen';
import ModelesScreen from '../screens/ModelesScreen';
import ProjetsScreen from '../screens/ProjetsScreen';
import MoiScreen from '../screens/MoiScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#181824', borderTopWidth: 0 },
          tabBarActiveTintColor: '#00bcd4',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen name="Éditer" component={EditerScreen} />
        <Tab.Screen name="Modèles" component={ModelesScreen} />
        <Tab.Screen name="Projets" component={ProjetsScreen} />
        <Tab.Screen name="Moi" component={MoiScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}