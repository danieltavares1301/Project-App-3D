import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../pages/home';
import Scanner from '../../pages/qr-code';
import Relatorios from '../../pages/relatorios';

import {Ionicons, AntDesign} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
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
