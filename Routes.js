import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {EquipamentoTabs} from './src/components/equipamentoTabs';

import {HomeTabs} from './src/components/homeTabs';

const RootStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {height: 40},
        }}>
        <RootStack.Group>
          <RootStack.Screen
            name="Home1"
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="EquipamentoTabs"
            component={EquipamentoTabs}
            options={{title: 'Equipamento'}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
