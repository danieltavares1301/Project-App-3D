import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/home';
import Scanner from './src/pages/camera';
import Relatorios from './src/pages/relatorios';
import DemoText from './src/pages/equipamentos/DemoText';

import {HomeTabs} from './src/components/HomeTabs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home1"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Relatorios"
          component={Relatorios}
          options={{headerShown: false}}
        />
        <Stack.Screen name="DemoText" component={DemoText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
