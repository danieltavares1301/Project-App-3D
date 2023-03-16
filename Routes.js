import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/home';
import Scanner from './src/pages/camera';
import Relatorios from './src/pages/relatorios';
import DemoText from './src/pages/equipamentos/DemoText';

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
        <Stack.Screen name="DemoText" component={DemoText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
