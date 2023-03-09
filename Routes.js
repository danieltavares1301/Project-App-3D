import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Camera from './src/camera';
import Relatorios from './src/relatorios';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={false}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#141414',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: 'Camera',
          //tabBarIcon: ({color}) => <Icon name="home" color="#fff" size={26} />,
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Relatorios}
        options={{
          tabBarLabel: 'Relatorios',
        }}
      />
    </Tab.Navigator>
  );
};

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
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Relatorios"
          component={Relatorios}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
