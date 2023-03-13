import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Scanner from './src/camera';
import Relatorios from './src/relatorios';

import {Ionicons, AntDesign} from '@expo/vector-icons';

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
        style
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: 'Ler QR Code',
          tabBarIcon: ({color}) => (
            <AntDesign name="qrcode" size={24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Relatorios}
        options={{
          tabBarLabel: 'Relatorios',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-newspaper" size={24} color="#fff" />
          ),
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
          name="Scanner"
          component={Scanner}
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
